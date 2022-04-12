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
`;

const HeaderList = styled(Box)`
  margin-bottom: 25px;
`;

const FooterList = styled(Box)`
  margin-top: 70px;
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
`;

const ProductList = () => {
  const { md, xs } = useResponsive();
  const { language } = useLanguage();
  const [orderBy, setOrderBy] = useState("asc");
  const [page, setPage] = useState(1);

  const resultText = useMemo(
    () => (
      <Typography fontSize={20} lineHeight={22} color="#828282" uppercase>
        showing 1-12 of 30 relults
      </Typography>
    ),
    []
  );

  return (
    <Layout>
      <Container md={md} xs={xs}>
        <Row>
          <Col span={20} offset={2}>
            <Row>
              <ColFilters span={6}>
                <AllFilters />
              </ColFilters>
              <Col span={18}>
                <HeaderList justify="space-between" align="center">
                  <OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
                  {resultText}
                </HeaderList>
                <Row gutter={[md ? 20 : 30, md ? 20 : 30]}>
                  {productList.map((product) => (
                    <Col span={8} key={product.id}>
                      <ProductCard
                        image={product.image}
                        name={product.name[language]}
                        category={product.category[language]}
                        owner={product.owner[language]}
                        price={product.price}
                        newPrice={product?.newPrice}
                      />
                    </Col>
                  ))}
                </Row>
                <FooterList justify="space-between" align="center">
                  <PaginationContainer
                    total={50}
                    defaultCurrent={page}
                    onChange={(page) => setPage(page)}
                  />
                  {resultText}
                </FooterList>
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
