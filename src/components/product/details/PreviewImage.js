import { memo, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
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
`;

const ImageContainer = styled(Image)`
  width: 450px;
  height: 450px;
`;

const IconExpend = styled(Icon)`
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
`;

const SliderContainer = styled.div`
  margin-top: 22px;

  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

const ImageSildeContainer = styled(Box)`
  width: 150px !important;
  height: 150px;
  background-color: #f7f7f7;
`;

const ImageSilde = styled(Image)`
  width: 100px;
  height: 100px;
`;

const IconControl = styled(Icon)`
  font-size: 24px;
  cursor: pointer;
  transform: ${({ deg }) => deg && `rotate(${deg})`};
  z-index: 1;
`;

const PreviewImage = ({ images, activeColor }) => {
  const [imageList, setImageList] = useState([]);
  const [activeImage, setActiveImage] = useState("");
  const [visible, setVisible] = useState(false);
  const slider = useRef();

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
        <ImageSildeContainer key={index} justify="center" align="center">
          <ImageSilde src={image} preview={false} />
        </ImageSildeContainer>
      )),
    [imageList]
  );

  return (
    <>
      <PreviewContainer justify="center" align="center">
        {activeImage && (
          <ImageContainer
            src={activeImage}
            preview={{
              visible,
              mask: null,
              onVisibleChange: () => setVisible(false),
            }}
          />
        )}
        <IconExpend component={expand_icon} onClick={() => setVisible(true)} />
      </PreviewContainer>
      <SliderContainer>
        <Slider
          ref={slider}
          slidesToShow={3}
          slidesToScroll={1}
          arrows={true}
          nextArrow={
            <IconControl
              component={arrow_active_icon}
              onClick={() => slider?.current?.slickNext()}
            />
          }
          prevArrow={
            <IconControl
              component={arrow_active_icon}
              deg="180deg"
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
