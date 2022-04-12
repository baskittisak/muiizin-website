import { memo } from "react";
import { useResponsive } from "../../utils/useResponsive";
import styled, { css } from "styled-components";
import Layout from "../../center_components/layout/Layout";
import { Col, Row } from "antd";
import AllFilters from "./Filters/AllFilters";

const Container = styled.div`
  margin: 216px 0 125px;

  ${({ md }) =>
    md &&
    css`
      margin: 140px 0 90px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      margin: 90px 0 40px;
    `};
`;

const ColFilters = styled(Col)`
  padding-right: 60px;
`;

const ProductList = () => {
  const { md, xs } = useResponsive();

  return (
    <Layout>
      <Container md={md} xs={xs}>
        <Row>
          <Col span={20} offset={2}>
            <Row>
              <ColFilters span={6}>
                <AllFilters />
              </ColFilters>
              <Col span={18}>ProductList</Col>
            </Row>
          </Col>
          <Col span={2} />
        </Row>
      </Container>
    </Layout>
  );
};

export default memo(ProductList);
