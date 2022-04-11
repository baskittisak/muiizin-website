import { memo } from "react";
import { useResponsive } from "../../utils/useResponsive";
import styled, { css } from "styled-components";
import Layout from "../../center_components/layout/Layout";

const Container = styled.div`
  margin-top: 168px;

  ${({ md }) =>
    md &&
    css`
      margin-top: 100px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      margin-top: 60px;
    `};
`;

const ProductList = () => {
  const { md, xs } = useResponsive();

  return (
    <Layout>
      <Container md={md} xs={xs}>Product List</Container>
    </Layout>
  );
};

export default memo(ProductList);
