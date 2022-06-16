import { memo, useCallback, useMemo, useState } from "react";
import { useResponsive } from "../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Image } from "antd";
import DrawerProduct from "./DrawerProduct";
import Slider from "react-slick";
import { useLanguage } from "../../utils/useLanguage";
import { Box } from "../../styles/common";
import Typography from "../../center_components/Typography";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  margin-top: 120px;
  height: calc(100vh - 120px);
  text-align: center;

  .slick-dots {
    bottom: 10px;
  }

  ${({ md }) =>
    md &&
    css`
      margin-top: 100px;
      height: 350px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      margin-top: 60px;
      height: 240px;
    `};
`;

const ImageContainer = styled(Image)`
  width: 100%;
  height: calc(100vh - 120px);
  object-fit: cover;

  ${({ md }) =>
    md &&
    css`
      height: 350px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      height: 240px;
    `};

  ${({ product }) =>
    product &&
    css`
      cursor: pointer;
    `};
`;

const EmptyImage = styled(Box)`
  width: 100%;
  height: calc(100vh - 120px);
  background-color: #04470040;

  ${({ md }) =>
    md &&
    css`
      height: 350px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      height: 240px;
    `};
`;

const Banner = ({ bannerList }) => {
  const { md, xs } = useResponsive();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [bannerId, setBannerId] = useState(0);
  const [bannerImage, setBannerImage] = useState("");

  const onClickBanner = useCallback((bannerId, bannerImage) => {
    setVisible(true);
    setBannerId(bannerId);
    setBannerImage(bannerImage);
  }, []);

  const onClose = useCallback(() => {
    setVisible(false);
    setBannerId(0);
    setBannerImage("");
  }, []);

  const isEmpty = useMemo(() => {
    return bannerList?.length === 0;
  }, [bannerList?.length]);

  const displayBannerList = useMemo(() => {
    return bannerList?.map((banner) => (
      <ImageContainer
        key={banner?.id}
        src={banner?.image?.[language]}
        preview={false}
        md={md}
        xs={xs}
        product={banner?.isProduct ? 1 : 0}
        onClick={() =>
          banner?.isProduct &&
          onClickBanner(banner?.id, banner?.image?.[language])
        }
      />
    ));
  }, [bannerList, language, md, xs, onClickBanner]);

  return (
    <Container md={md} xs={xs}>
      {isEmpty && (
        <EmptyImage justify="center" align="center" md={md} xs={xs}>
          <Typography>{t("banner_coming_soon")}</Typography>
        </EmptyImage>
      )}
      {!isEmpty && (
        <>
          <Slider
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            dots={true}
          >
            {displayBannerList}
          </Slider>
          <DrawerProduct
            visible={visible}
            bannerId={bannerId}
            bannerImage={bannerImage}
            onClose={onClose}
          />
        </>
      )}
    </Container>
  );
};

export default memo(Banner);
