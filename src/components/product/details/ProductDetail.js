import { memo, useMemo } from "react";
import { useResponsive } from "../../../utils/useResponsive";
import { useQuery } from "../../../utils/useQuery";
import { useLanguage } from "../../../utils/useLanguage";
import { productList } from "../../../resource/mock_data/productList";
import styled, { css } from "styled-components";
import Layout from "../../../center_components/layout/Layout";
import { Breadcrumb, Col, Row } from "antd";
import PreviewImage from "./PreviewImage";
import Details from "./Details";

const Container = styled.div`
  margin: 165px 0 150px;

  .ant-breadcrumb {
    margin-bottom: 25px;
  }

  .ant-breadcrumb,
  .ant-breadcrumb-separator {
    text-transform: uppercase;
    color: #828282;
    font-size: 18px;
    line-height: 20px;
  }

  .ant-breadcrumb > span:last-child {
    color: #4f4f4f;
    font-weight: 700;
  }

  ${({ md }) =>
    md &&
    css`
      margin: 100px 0 90px;

      .ant-breadcrumb,
      .ant-breadcrumb-separator {
        font-size: 14px;
        line-height: 15px;
      }
    `};

  ${({ xs }) =>
    xs &&
    css`
      margin: 100px 0 40px;

      .ant-breadcrumb {
        margin-bottom: 12px;
      }

      .ant-breadcrumb,
      .ant-breadcrumb-separator {
        font-size: 12px;
        line-height: 13px;
      }
    `};
`;

const ProductDetail = () => {
  const { md, xs } = useResponsive();
  const { language } = useLanguage();
  const productId = useQuery("productId");

  const productDetail = useMemo(() => {
    return productList?.find((product) => "" + product?.id === productId);
  }, [productId]);

  const breadcrumbList = useMemo(
    () => (
      <Breadcrumb separator="|">
        <Breadcrumb.Item>CATEGORIES</Breadcrumb.Item>
        <Breadcrumb.Item>{productDetail?.category?.[language]}</Breadcrumb.Item>
        <Breadcrumb.Item>{productDetail?.name?.[language]}</Breadcrumb.Item>
      </Breadcrumb>
    ),
    [language, productDetail?.category, productDetail?.name]
  );

  return (
    <Layout>
      <Container md={md} xs={xs}>
        <Row>
          <Col span={20} offset={2}>
            {breadcrumbList}
            <Row>
              <Col span={12}>
                <PreviewImage images={productDetail?.images} />
              </Col>
              <Col span={12}>
                <Details />
              </Col>
            </Row>
          </Col>
          <Col offset={2} />
        </Row>
      </Container>
    </Layout>
  );
};

export default memo(ProductDetail);
