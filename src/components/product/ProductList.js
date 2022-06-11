import { memo, useEffect, useMemo, useState } from "react";
import { useResponsive } from "../../utils/useResponsive";
import { useLanguage } from "../../utils/useLanguage";
import styled, { css } from "styled-components";
import { Box, EmptyData } from "../../styles/common";
import { Col, Row, Pagination, Skeleton } from "antd";
import Layout from "../../center_components/layout/Layout";
import AllFilters from "./Filters/AllFilters";
import ProductCard from "../../center_components/product/ProductCard";
import OrderBy from "./OrderBy";
import useSWR from "swr";
import { LoadingIcon } from "../../styles/common";
import { useDebounce } from "use-debounce";

const Container = styled.div`
  margin: 168px 0 125px;

  ${({ md }) =>
    md &&
    css`
      margin: 100px 0 90px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      margin: 60px 0 40px;
    `};
`;

const ColFilters = styled(Col)`
  padding-right: 60px;

  ${({ is_md }) =>
    is_md &&
    css`
      padding-right: 30px;
    `};

  ${({ is_xs }) =>
    is_xs &&
    css`
      padding-right: 0;
    `};
`;

const ColProduct = styled(Col)`
  display: flex;
  justify-content: center;
`;

const HeaderList = styled(Box)`
  margin-bottom: 25px;

  ${({ xs }) =>
    xs &&
    css`
      margin-bottom: 15px;
      margin-top: 30px;
    `};
`;

const FooterList = styled(Box)`
  margin-top: 70px;
  flex-wrap: wrap-reverse;
`;

const PaginationContainer = styled(Pagination)`
  .ant-pagination-item a {
    color: #828282;
  }

  .ant-pagination-item {
    background: #d9e3d9;
    border-color: #d9e3d9;
  }

  .ant-pagination-item-active {
    background: #044700;
    border-color: #044700;
  }

  .ant-pagination-item-active a {
    color: #ffffff;
  }

  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    background-color: #044700;
    border: 1px solid #044700;
    color: #ffffff;
  }

  .ant-pagination-disabled .ant-pagination-item-link {
    background-color: #d9e3d9;
    border: 1px solid #d9e3d9;
    color: #828282;
  }

  ${({ wrap }) =>
    wrap &&
    css`
      margin-top: 12px;
    `};
`;

const ProductList = () => {
  const { width, md, xs } = useResponsive();
  const { language } = useLanguage();
  const [orderBy, setOrderBy] = useState("asc");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [categorieList, setCategorieList] = useState([]);
  const [price, setPrice] = useState([1, 1]);

  const [searchValue] = useDebounce(search, 500);
  const [priceRange] = useDebounce(price, 500);
  const apiProductList = useMemo(() => {
    const categoryIds = categorieList
      ?.filter((category) => category?.checked)
      ?.map((category) => category?.categoryId);
    const isAll = categoryIds.includes(0) || categoryIds.length === 0;
    const categoryQuery = !isAll ? `&categoryIds=${categoryIds}` : "";
    const searchQuery = searchValue ? `&search=${searchValue}` : "";
    return `/list/product?page=${page}&sort=${orderBy}&language=${language}&price=${priceRange}${searchQuery}${categoryQuery}`;
  }, [categorieList, language, orderBy, page, searchValue, priceRange]);

  const { data: categories } = useSWR("/list/category");
  const { data: maxPrice } = useSWR("/max/price");
  const { data: productList } = useSWR(apiProductList);

  useEffect(() => {
    maxPrice && setPrice([1, maxPrice?.maxPrice]);
  }, [maxPrice]);

  const isLoading = useMemo(() => {
    return !categories || !maxPrice;
  }, [categories, maxPrice]);

  const spanProduct = useMemo(() => {
    return xs && width <= 390
      ? 24
      : md && width >= 860
      ? 8
      : (md && (width < 860 || width >= 600)) || (!md && width < 1320)
      ? 12
      : 8;
  }, [width, md, xs]);

  const filters = useMemo(
    () => (
      <ColFilters
        span={xs ? 24 : md ? 8 : 6}
        is_md={md || width < 1320 ? 1 : 0}
        is_xs={xs}
      >
        <AllFilters
          categories={categories}
          maxPrice={maxPrice?.maxPrice}
          search={search}
          categorieList={categorieList}
          price={price}
          setSearch={setSearch}
          setCategorieList={setCategorieList}
          setPrice={setPrice}
        />
      </ColFilters>
    ),
    [
      md,
      xs,
      width,
      search,
      categorieList,
      categories,
      maxPrice?.maxPrice,
      price,
    ]
  );

  const isEmpty = useMemo(() => {
    return productList && productList?.data?.length === 0;
  }, [productList]);

  const displayProduct = useMemo(() => {
    if (!productList) {
      return [...Array(12).keys()].map((_, index) => (
        <ColProduct span={spanProduct} key={index}>
          <Skeleton active />
        </ColProduct>
      ));
    } else {
      if (isEmpty) return <EmptyData description="ไม่พบสินค้า" />;
      return productList?.data?.map((product) => (
        <ColProduct span={spanProduct} key={product.productId}>
          <ProductCard
            productId={product?.productId}
            image={product?.image}
            name={product?.productName?.[language]}
            category={product?.category?.[language]}
            owner={product?.productOwner?.[language]}
            price={product?.price}
          />
        </ColProduct>
      ));
    }
  }, [language, productList, spanProduct, isEmpty]);

  if (isLoading) return <LoadingIcon />;

  return (
    <Layout>
      <Container md={md} xs={xs}>
        <Row>
          <Col span={20} offset={2}>
            <Row>
              {filters}
              <Col span={xs ? 24 : md ? 16 : 18}>
                <HeaderList justify="space-between" align="center" xs={xs}>
                  <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
                </HeaderList>
                <Row gutter={[md ? 20 : 30, md ? 20 : 30]}>
                  {displayProduct}
                </Row>
                {xs === 0 && !isEmpty && (
                  <FooterList justify="space-between" align="center">
                    <PaginationContainer
                      pageSize={12}
                      total={productList?.total}
                      wrap={width <= 703}
                      current={page}
                      onChange={setPage}
                    />
                  </FooterList>
                )}
              </Col>
            </Row>
          </Col>
          <Col span={2} />
        </Row>
      </Container>
    </Layout>
  );
};

export default memo(ProductList);
