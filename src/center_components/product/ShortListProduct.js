import { memo, useMemo, useRef } from "react";
import { useLanguage } from "../../utils/useLanguage";
import { useResponsive } from "../../utils/useResponsive";
import { productList } from "../../resource/mock_data/productList";
import styled, { css } from "styled-components";
import { Box } from "../../styles/common";
import { Row, Col, Space } from "antd";
import Icon from "@ant-design/icons";
// import { ReactComponent as arrow_disabled_icon } from "../../assets/icons/arrow_disabled.svg";
import { ReactComponent as arrow_active_icon } from "../../assets/icons/arrow_active.svg";
import Slider from "react-slick";
import Typography from "../Typography";
import ProductCard from "./ProductCard";

const RowContainer = styled(Row)`
  background-color: #fff;
  width: 100%;
  padding: 100px 0 150px;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  ${({ sm }) =>
    sm &&
    css`
      padding: 52px 0 44px;
    `};
`;

const Line = styled.div`
  width: 40px;
  height: 3px;
  background-color: #044700;

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

  ${({ sm }) =>
    sm &&
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

const ShortListProduct = ({ title }) => {
  const { language } = useLanguage();
  const { width, sm } = useResponsive();
  const slider = useRef();

  const sliderNumber = useMemo(() => {
    return width < 1024 ? 2 : width < 1350 ? 3 : 4;
  }, [width]);

  const displaProductList = useMemo(
    () =>
      productList.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name[language]}
          category={product.category[language]}
          owner={product.owner[language]}
          price={product.price}
          newPrice={product?.newPrice}
        />
      )),
    [language]
  );

  return (
    <RowContainer sm={sm}>
      <Col span={20} offset={2}>
        <Title justify={sm ? "center" : "space-between"} align="center">
          <Space direction="vertical" size={sm ? 3 : 0}>
            <Typography
              fontSize={sm ? 20 : 28}
              fontWeight={700}
              lineHeight={sm ? 22 : 30}
              color="#044700"
              uppercase
            >
              {title}
            </Typography>
            <Line align={sm && "center"} />
          </Space>
          {sm === 0 && (
            <Space size={12}>
              <IconControl
                component={arrow_active_icon}
                deg="180deg"
                onClick={() => slider?.current?.slickPrev()}
              />
              <Typography fontSize={36} lineHeight={39} color="#8FA29A">
                |
              </Typography>
              <IconControl
                component={arrow_active_icon}
                onClick={() => slider?.current?.slickNext()}
              />
            </Space>
          )}
        </Title>
        {sm === 0 && (
          <Slider
            ref={slider}
            slidesToShow={sliderNumber}
            slidesToScroll={sliderNumber}
          >
            {displaProductList}
          </Slider>
        )}
        {sm === 1 && <SliderScroll size={20}>{displaProductList}</SliderScroll>}
        <ViewMore sm={sm}>
          <Typography
            fontSize={sm ? 12 : 18}
            fontWeight={700}
            color="#044700"
            uppercase
          >
            View More
          </Typography>
        </ViewMore>
      </Col>
      <Col span={2} />
    </RowContainer>
  );
};

export default memo(ShortListProduct);
