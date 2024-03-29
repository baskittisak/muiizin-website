import { memo, useMemo, useRef } from "react";
import { useLanguage } from "../../utils/useLanguage";
import { useResponsive } from "../../utils/useResponsive";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { Box } from "../../styles/common";
import { Row, Col, Space, Skeleton } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as arrow_active_icon } from "../../assets/icons/arrow_active.svg";
import Slider from "react-slick";
import Typography from "../Typography";
import ProductCard from "./ProductCard";
import { useTranslation } from "react-i18next";

const RowContainer = styled(Row)`
  background-color: #fff;
  width: 100%;
  padding: 100px 0 150px;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  ${({ md }) =>
    md &&
    css`
      padding: 62px 0 60px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      padding: 52px 0 44px;
    `};

  ${({ bottom }) =>
    bottom &&
    css`
      padding-bottom: ${bottom} !important;
    `};
`;

const Line = styled.div`
  width: 40px;
  height: 3px;
  background-color: #044700;

  ${({ md }) =>
    md &&
    css`
      width: 20px;
      height: 2px;
    `};

  ${({ align }) =>
    align === "center" &&
    css`
      margin: auto;
    `};
`;

const Title = styled(Box)`
  margin-bottom: 25px;
`;

const IconControl = styled(Icon)`
  font-size: 18px;
  cursor: pointer;
  transform: ${({ deg }) => deg && `rotate(${deg})`};

  ${({ md }) =>
    md &&
    css`
      font-size: 11px;
    `};
`;

const ViewMore = styled.div`
  cursor: pointer;
  width: 160px;
  padding: 24px 0;
  border: 1.5px solid #d9e3d9;
  border-left: 0;
  border-right: 0;
  text-align: center;
  margin: 50px auto 0;

  ${({ md }) =>
    md &&
    css`
      width: 94px;
      padding: 13px 0;
      margin: 30px auto 0;
    `};
`;

const SliderScroll = styled(Space)`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  align-items: flex-start;
`;

const EmptyProduct = styled(Box)`
  width: 100%;
  height: 150px;
`;

const ShortListProduct = ({
  title,
  productList,
  hiddenViewMore,
  paddingBottom,
}) => {
  const { language } = useLanguage();
  const { width, md, xs } = useResponsive();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const slider = useRef();

  const isLoading = useMemo(() => {
    return productList === undefined;
  }, [productList]);

  const totalProduct = useMemo(() => {
    return productList?.length;
  }, [productList?.length]);

  const isEmpty = useMemo(() => {
    return totalProduct === 0;
  }, [totalProduct]);

  const isHiddenArrow = useMemo(() => {
    return totalProduct <= 4;
  }, [totalProduct]);

  const sliderNumber = useMemo(() => {
    if (isHiddenArrow) return totalProduct;
    return md && width >= 800
      ? 4
      : (md && (width < 600 || width >= 800)) || (!md && width < 1024)
      ? 2
      : (md && (width < 800 || width >= 600)) || (!md && width < 1350)
      ? 3
      : 4;
  }, [width, md, isHiddenArrow, totalProduct]);

  const displaProductList = useMemo(
    () =>
      productList?.map((product) => (
        <ProductCard
          key={product?.productId}
          productId={product?.productId}
          image={product?.image}
          name={product?.productName?.[language]}
          category={product?.category?.[language]}
          owner={product?.productOwner?.[language]}
          price={product?.price}
        />
      )),
    [productList, language]
  );

  return (
    <RowContainer md={md} xs={xs} bottom={paddingBottom}>
      <Col span={20} offset={2}>
        <Title justify={xs ? "center" : "space-between"} align="center">
          <Space direction="vertical" size={xs ? 3 : 0}>
            <Typography
              fontSize={xs ? 20 : md ? 18 : 28}
              fontWeight={700}
              lineHeight={xs ? 22 : md ? 20 : 30}
              color="#044700"
              uppercase
            >
              {title}
            </Typography>
            <Line align={xs && "center"} md={md} />
          </Space>
          {xs === 0 && !isHiddenArrow && (
            <Space size={md ? 7 : 12}>
              <IconControl
                component={arrow_active_icon}
                deg="180deg"
                md={md}
                onClick={() => slider?.current?.slickPrev()}
              />
              <Typography
                fontSize={md ? 22 : 36}
                lineHeight={md ? 24 : 39}
                color="#8FA29A"
              >
                |
              </Typography>
              <IconControl
                component={arrow_active_icon}
                md={md}
                onClick={() => slider?.current?.slickNext()}
              />
            </Space>
          )}
        </Title>
        {isLoading && (
          <EmptyProduct justify="center" align="center">
            <Skeleton active />
          </EmptyProduct>
        )}
        {isEmpty && (
          <EmptyProduct justify="center" align="center">
            <Typography>{t("product_coming_soon")}</Typography>
          </EmptyProduct>
        )}
        {xs === 0 && (
          <Slider
            ref={slider}
            slidesToShow={sliderNumber}
            slidesToScroll={sliderNumber}
            arrows={false}
          >
            {displaProductList}
          </Slider>
        )}
        {xs === 1 && <SliderScroll size={20}>{displaProductList}</SliderScroll>}
        {!isEmpty && !hiddenViewMore && (
          <ViewMore md={md} onClick={() => navigate("/product")}>
            <Typography
              fontSize={md ? 12 : 18}
              lineHeight={md ? 13 : 13}
              fontWeight={700}
              color="#044700"
              uppercase
            >
              {t("view_more")}
            </Typography>
          </ViewMore>
        )}
      </Col>
      <Col span={2} />
    </RowContainer>
  );
};

export default memo(ShortListProduct);
