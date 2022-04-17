import { memo, useEffect, useMemo, useState } from "react";
import { useResponsive } from "../../../utils/useResponsive";
import { useQuery } from "../../../utils/useQuery";
import { useLanguage } from "../../../utils/useLanguage";
import { productList } from "../../../resource/mock_data/productList";
import styled, { css } from "styled-components";
import Layout from "../../../center_components/layout/Layout";
import { Breadcrumb, Col, Row } from "antd";
import PreviewImage from "./PreviewImage";
import Details from "./Details";
import Description from "./Description";
import ShortListProduct from "../../../center_components/product/ShortListProduct";

const Container = styled.div`
  margin: 145px 0 150px;

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
        margin-left: 17px;
      }

      .ant-breadcrumb,
      .ant-breadcrumb-separator {
        font-size: 12px;
        line-height: 13px;
      }

      .slick-dots {
        bottom: 30px;
      }
    `};
`;

const RowContainer = styled(Row)`
  margin-bottom: 100px;

  ${({ md }) =>
    md &&
    css`
      margin-bottom: 78px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      margin-bottom: 64px;
    `};
`;

const ProductDetail = () => {
  const { md, xs } = useResponsive();
  const { language } = useLanguage();
  const productId = useQuery("productId");
  const [activeSize, setActiveSize] = useState("");
  const [activeColor, setActiveColor] = useState("");

  const productDetail = useMemo(() => {
    return productList?.find((product) => "" + product?.id === productId);
  }, [productId]);

  const productDescription = useMemo(() => {
    return `<strong>Lorem ipsum dolor sit amet</strong>\n
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae. Faucibus faucibus convallis dictum aliquet tempor ullamcorper donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae. Faucibus faucibus convallis dictum aliquet tempor ullamcorper donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae. Faucibus faucibus convallis dictum aliquet tempor ullamcorper donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae.</p>\n\n
    <strong>Lorem ipsum dolor sit amet</strong>\n
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae. Faucibus faucibus convallis dictum aliquet tempor ullamcorper donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae. Faucibus faucibus convallis dictum aliquet tempor ullamcorper donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae. Faucibus faucibus convallis dictum aliquet tempor ullamcorper donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae.</p>\n\n
    <strong>Lorem ipsum dolor sit amet</strong>\n
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae. Faucibus faucibus convallis dictum aliquet tempor ullamcorper donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae. Faucibus faucibus convallis dictum aliquet tempor ullamcorper donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae. Faucibus faucibus convallis dictum aliquet tempor ullamcorper donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae.</p>\n\n
    <strong>Lorem ipsum dolor sit amet</strong>\n
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae. Faucibus faucibus convallis dictum aliquet tempor ullamcorper donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae. Faucibus faucibus convallis dictum aliquet tempor ullamcorper donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae. Faucibus faucibus convallis dictum aliquet tempor ullamcorper donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quis faucibus consequat facilisi vitae.</p>
    `;
  }, []);

  useEffect(() => {
    productDetail?.size && setActiveSize(productDetail?.size[0]);
  }, [productDetail?.size]);

  useEffect(() => {
    productDetail?.color && setActiveColor(productDetail?.color[0]);
  }, [productDetail?.color]);

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
          <Col span={xs ? 24 : 20} offset={xs ? 0 : 2}>
            {breadcrumbList}
            <RowContainer md={md} xs={xs}>
              <Col span={xs ? 24 : 12}>
                <PreviewImage
                  images={productDetail?.images}
                  activeColor={activeColor}
                />
              </Col>
              <Col span={xs ? 24 : 12}>
                <Details
                  productName={productDetail?.name?.[language]}
                  productOwner={productDetail?.owner?.[language]}
                  size={productDetail?.size || false}
                  color={productDetail?.color || false}
                  price={productDetail?.price}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                  activeColor={activeColor}
                  setActiveColor={setActiveColor}
                />
              </Col>
            </RowContainer>
            <Description description={productDescription} />
          </Col>
          <Col offset={xs ? 0 : 2} />
        </Row>
        <ShortListProduct
          title="Related Products"
          hiddenViewMore={true}
          paddingBottom="0px"
        />
      </Container>
    </Layout>
  );
};

export default memo(ProductDetail);
