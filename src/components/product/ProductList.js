import { memo } from "react";
import { useResponsive } from "../../utils/useResponsive";
import styled, { css } from "styled-components";
import Layout from "../../center_components/layout/Layout";

const Container = styled.div`
  margin-top: 168px;

  ${({ sm }) =>
    sm &&
    css`
      margin-top: 60px;
    `};
`;

const ProductList = () => {
  const { sm } = useResponsive();

  return (
    <Layout>
      <Container sm={sm}>Product List</Container>
    </Layout>
  );
};

export default memo(ProductList);
