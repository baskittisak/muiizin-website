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

  ${({ xs }) =>
    xs &&
    css`
      height: 428px;
      margin-bottom: 20px;
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

  ${({ xs }) =>
    xs &&
    css`
      width: 300px;
      height: 300px;
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

  ${({ xs }) =>
    xs &&
    css`
      font-size: 18px;
      top: 11px;
      right: 11px;
    `};
`;

const SliderContainer = styled.div`
  margin-top: 22px;

  .slick-slide,
  .slick-slider {
    display: flex;
    justify-content: center;
    align-items: center;
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

const SliderImageWrapper = styled.div`
  position: relative;
`;

const ArrowLeft = ({ isMd, slider }) => (
  <IconControl
    component={arrow_active_icon}
    md={isMd}
    deg="180deg"
    onClick={() => slider?.current?.slickPrev()}
  />
);

const ArrowRight = ({ isMd, slider }) => (
  <IconControl
    component={arrow_active_icon}
    md={isMd}
    onClick={() => slider?.current?.slickNext()}
  />
);

const PreviewImage = ({ images, activeColor }) => {
  const { width, xs } = useResponsive();
  const [imageList, setImageList] = useState([]);
  const [activeImage, setActiveImage] = useState("");
  const [visible, setVisible] = useState(false);
  const slider = useRef();

  const isMd = useMemo(() => {
    return width < 1150 ? 1 : 0;
  }, [width]);

  useEffect(() => {
    if (images[0]?.code !== undefined && activeColor) {
      const imagesActiveColor = images?.find(
        (image) => image?.id === activeColor
      )?.images;
      setImageList(imagesActiveColor);
      setActiveImage(imagesActiveColor[0]?.image);
    } else {
      setImageList(images);
      setActiveImage(images[0]?.image);
    }
  }, [activeColor, images]);

  const totalImage = useMemo(() => {
    return imageList?.length;
  }, [imageList?.length]);

  const isImageShow = useMemo(() => {
    return totalImage <= 4;
  }, [totalImage]);

  const displayImageList = useMemo(
    () =>
      imageList?.map((image, index) => (
        <ImageSildeContainer
          key={index}
          justify="center"
          align="center"
          md={isMd}
        >
          <ImageSilde src={image?.image} preview={false} md={isMd} />
        </ImageSildeContainer>
      )),
    [imageList, isMd]
  );

  const displayImageSlide = useMemo(
    () => (
      <SliderImageWrapper>
        <Slider
          ref={slider}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          dots={true}
          afterChange={(currentSlide) =>
            setActiveImage(imageList[currentSlide]?.image)
          }
        >
          {imageList?.map((image, index) => (
            <PreviewContainer
              key={index}
              justify="center"
              align="center"
              xs={xs}
            >
              <ImageContainer
                src={image?.image}
                xs={xs}
                preview={{
                  visible: visible && activeImage === image?.image,
                  mask: null,
                  onVisibleChange: () => {
                    setActiveImage(image?.image);
                    setVisible(false);
                  },
                }}
              />
            </PreviewContainer>
          ))}
        </Slider>
        <IconExpend
          component={expand_icon}
          onClick={() => setVisible(true)}
          xs={xs}
        />
      </SliderImageWrapper>
    ),
    [xs, imageList, activeImage, visible]
  );

  return (
    <>
      {xs === 0 && (
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
      )}
      {xs === 0 && (
        <SliderContainer md={isMd}>
          <Slider
            ref={slider}
            slidesToShow={isImageShow ? totalImage - 1 : width < 680 ? 2 : 3}
            slidesToScroll={1}
            arrows={true}
            nextArrow={<ArrowRight isMd={isMd} slider={slider} />}
            prevArrow={<ArrowLeft isMd={isMd} slider={slider} />}
            afterChange={(currentSlide) =>
              setActiveImage(imageList[currentSlide]?.image)
            }
          >
            {displayImageList}
          </Slider>
        </SliderContainer>
      )}
      {xs === 1 && displayImageSlide}
    </>
  );
};

export default memo(PreviewImage);
