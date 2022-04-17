import { memo, useEffect, useMemo, useRef, useState } from "react";
import { useResponsive } from "../../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Box } from "../../../styles/common";
import { Image } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as expand_icon } from "../../../assets/icons/expand.svg";
import { ReactComponent as arrow_active_icon } from "../../../assets/icons/arrow_active.svg";
import Slider from "react-slick";

const PreviewContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 580px;
  background-color: #f7f7f7;

  ${({ md }) =>
    md &&
    css`
      height: 356px;
    `};
`;

const ImageContainer = styled(Image)`
  width: 450px;
  height: 450px;

  ${({ md }) =>
    md &&
    css`
      width: 250px;
      height: 250px;
    `};
`;

const IconExpend = styled(Icon)`
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;

  ${({ md }) =>
    md &&
    css`
      font-size: 15px;
      top: 9px;
      right: 9px;
    `};
`;

const SliderContainer = styled.div`
  margin-top: 22px;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  ${({ md }) =>
    md &&
    css`
      margin-top: 12px;
    `};
`;

const ImageSildeContainer = styled(Box)`
  width: 150px !important;
  height: 150px;
  background-color: #f7f7f7;

  ${({ md }) =>
    md &&
    css`
      width: 92px !important;
      height: 92px;
    `};
`;

const ImageSilde = styled(Image)`
  width: 100px;
  height: 100px;

  ${({ md }) =>
    md &&
    css`
      width: 60px;
      height: 60px;
    `};
`;

const IconControl = styled(Icon)`
  font-size: 24px;
  cursor: pointer;
  transform: ${({ deg }) => deg && `rotate(${deg})`};
  z-index: 1;

  ${({ md }) =>
    md &&
    css`
      font-size: 15px;
    `};
`;

const PreviewImage = ({ images, activeColor }) => {
  const { width } = useResponsive();
  const [imageList, setImageList] = useState([]);
  const [activeImage, setActiveImage] = useState("");
  const [visible, setVisible] = useState(false);
  const slider = useRef();

  const isMd = useMemo(() => {
    return width < 1150 ? 1 : 0;
  }, [width]);

  useEffect(() => {
    if (images[0]?.color !== undefined && activeColor) {
      const imagesActiveColor = images?.find(
        (image) => image?.color === activeColor
      )?.list;
      setImageList(imagesActiveColor);
      setActiveImage(imagesActiveColor[0]);
    } else {
      setImageList(images);
      setActiveImage(images[0]);
    }
  }, [activeColor, images]);

  const displaImageList = useMemo(
    () =>
      imageList?.map((image, index) => (
        <ImageSildeContainer
          key={index}
          justify="center"
          align="center"
          md={isMd}
        >
          <ImageSilde src={image} preview={false} md={isMd} />
        </ImageSildeContainer>
      )),
    [imageList, isMd]
  );

  return (
    <>
      <PreviewContainer justify="center" align="center" md={isMd}>
        {activeImage && (
          <ImageContainer
            src={activeImage}
            md={isMd}
            preview={{
              visible,
              mask: null,
              onVisibleChange: () => setVisible(false),
            }}
          />
        )}
        <IconExpend
          component={expand_icon}
          onClick={() => setVisible(true)}
          md={isMd}
        />
      </PreviewContainer>
      <SliderContainer md={isMd}>
        <Slider
          ref={slider}
          slidesToShow={width < 680 ? 2 : 3}
          slidesToScroll={1}
          arrows={true}
          nextArrow={
            <IconControl
              component={arrow_active_icon}
              md={isMd}
              onClick={() => slider?.current?.slickNext()}
            />
          }
          prevArrow={
            <IconControl
              component={arrow_active_icon}
              deg="180deg"
              md={isMd}
              onClick={() => slider?.current?.slickPrev()}
            />
          }
          afterChange={(currentSlide) =>
            setActiveImage(imageList[currentSlide])
          }
        >
          {displaImageList}
        </Slider>
      </SliderContainer>
    </>
  );
};

export default memo(PreviewImage);
