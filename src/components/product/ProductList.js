import { memo, useMemo, useState } from "react";
import { useResponsive } from "../../utils/useResponsive";
import { useLanguage } from "../../utils/useLanguage";
import { productList } from "../../resource/mock_data/productList";
import styled, { css } from "styled-components";
import { Box } from "../../styles/common";
import Layout from "../../center_components/layout/Layout";
import { Col, Row, Pagination } from "antd";
import AllFilters from "./Filters/AllFilters";
import ProductCard from "../../center_components/product/ProductCard";
import OrderBy from "./OrderBy";
import Typography from "../../center_components/Typography";

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

  const resultText = useMemo(
    () =>
      xs ? null : (
        <Typography
          fontSize={md ? 12 : 20}
          lineHeight={md ? 13 : 22}
          color="#828282"
          uppercase
        >
          showing 1-12 of 30 relults
        </Typography>
      ),
    [md, xs]
  );

  const spanProduct = useMemo(() => {
    return xs && width <= 390
      ? 24
      : md && width >= 860
      ? 8
      : (md && (width < 860 || width >= 600)) || (!md && width < 1320)
      ? 12
      : 8;
  }, [width, md, xs]);

  return (
    <Layout>
      <Container md={md} xs={xs}>
        <Row>
          <Col span={20} offset={2}>
            <Row>
              <ColFilters
                span={xs ? 24 : md ? 8 : 6}
                is_md={md || width < 1320 ? 1 : 0}
                is_xs={xs}
              >
                <AllFilters />
              </ColFilters>
              <Col span={xs ? 24 : md ? 16 : 18}>
                <HeaderList justify="space-between" align="center" xs={xs}>
                  <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
                  {resultText}
                </HeaderList>
                <Row gutter={[md ? 20 : 30, md ? 20 : 30]}>
                  {productList.map((product) => (
                    <ColProduct span={spanProduct} key={product.id}>
                      <ProductCard
                        image={product.image}
                        name={product.name[language]}
                        category={product.category[language]}
                        owner={product.owner[language]}
                        price={product.price}
                        newPrice={product?.newPrice}
                      />
                    </ColProduct>
                  ))}
                </Row>
                {xs === 0 && (
                  <FooterList justify="space-between" align="center">
                    <PaginationContainer
                      total={50}
                      wrap={width <= 703}
                      defaultCurrent={page}
                      onChange={(page) => setPage(page)}
                    />
                    {resultText}
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
