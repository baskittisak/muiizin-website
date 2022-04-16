import { memo } from "react";
import { useResponsive } from "../../../utils/useResponsive";
import styled, { css } from "styled-components";
import Layout from "../../../center_components/layout/Layout";

const Container = styled.div`
  margin: 145px 0 150px;

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

const ProductDetail = () => {
  const { md, xs } = useResponsive();

  return (
    <Layout>
      <Container md={md} xs={xs}>
          
      </Container>
    </Layout>
  );
};

export default memo(ProductDetail);
