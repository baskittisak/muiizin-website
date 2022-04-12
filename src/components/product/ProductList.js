import { memo, useState } from "react";
import { useResponsive } from "../../utils/useResponsive";
import { useLanguage } from "../../utils/useLanguage";
import { productList } from "../../resource/mock_data/productList";
import styled, { css } from "styled-components";
import { Box } from "../../styles/common";
import Layout from "../../center_components/layout/Layout";
import { Col, Row } from "antd";
import AllFilters from "./Filters/AllFilters";
import ProductCard from "../../center_components/product/ProductCard";
import OrderBy from "./OrderBy";

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

const ProductList = () => {
  const { md, xs } = useResponsive();
  const { language } = useLanguage();
  const [orderBy, setOrderBy] = useState("asc");

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
