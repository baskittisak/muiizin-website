import { memo, useEffect, useMemo, useState } from "react";
import { useResponsive } from "../../../utils/useResponsive";
import { useQuery } from "../../../utils/useQuery";
import { useLanguage } from "../../../utils/useLanguage";
import styled, { css } from "styled-components";
import Layout from "../../../center_components/layout/Layout";
import { Breadcrumb, Col, Row } from "antd";
import PreviewImage from "./PreviewImage";
import Details from "./Details";
import Description from "./Description";
import ShortListProduct from "../../../center_components/product/ShortListProduct";
import useSWR from "swr";
import { LoadingIcon } from "../../../styles/common";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const productId = useQuery("productId");
  const [activeSize, setActiveSize] = useState("");
  const [activeColor, setActiveColor] = useState("");

  const apiProduct = useMemo(() => {
    return productId && `/product/${productId}`;
  }, [productId]);

  const { data: product } = useSWR(apiProduct);

  const productDescription = useMemo(() => {
    return product?.description?.[language];
  }, [language, product?.description]);

  useEffect(() => {
    product?.isOption && product?.sizes && setActiveSize(product?.sizes[0]?.id);
  }, [product?.isOption, product?.sizes]);

  useEffect(() => {
    product?.isOption &&
      product?.images?.[0]?.code &&
      setActiveColor(product?.images?.[0]?.id);
  }, [product?.images, product?.isOption]);

  const breadcrumbList = useMemo(
    () => (
      <Breadcrumb separator="|">
        <Breadcrumb.Item>{t("categories")}</Breadcrumb.Item>
        <Breadcrumb.Item>{product?.category?.[language]}</Breadcrumb.Item>
        <Breadcrumb.Item>{product?.productName?.[language]}</Breadcrumb.Item>
      </Breadcrumb>
    ),
    [language, product?.category, product?.productName, t]
  );

  if (!product) return <LoadingIcon />;

  return (
    <Layout>
      <Container md={md} xs={xs}>
        <Row>
          <Col span={xs ? 24 : 20} offset={xs ? 0 : 2}>
            {breadcrumbList}
            <RowContainer md={md} xs={xs}>
              <Col span={xs ? 24 : 12}>
                <PreviewImage
                  images={product?.images}
                  activeColor={activeColor}
                />
              </Col>
              <Col span={xs ? 24 : 12}>
                <Details
                  productName={product?.productName?.[language]}
                  productOwner={product?.productOwner?.[language]}
                  sizes={product?.isOption && product?.sizes}
                  colorList={
                    product?.isOption && activeColor && product?.images
                  }
                  price={product?.price}
                  status={product?.status?.[language]}
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
          title={t("related_products")}
          hiddenViewMore={true}
          paddingBottom="0px"
        />
      </Container>
    </Layout>
  );
};

export default memo(ProductDetail);
