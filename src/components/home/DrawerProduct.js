import { memo, useMemo } from "react";
import { useResponsive } from "../../utils/useResponsive";
import { useLanguage } from "../../utils/useLanguage";
import styled, { css } from "styled-components";
import { Box } from "../../styles/common";
import { Drawer, Image, Skeleton, Space } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as close_icon } from "../../assets/icons/close.svg";
import Typography from "../../center_components/Typography";
import RelatedProductCard from "../../center_components/product/RelatedProductCard";
import useSWR from "swr";
import { useTranslation } from "react-i18next";

const DrawerContainer = styled(Drawer)`
  .ant-drawer-header {
    padding: 74px 29px 0;
    border-bottom: 0;
  }

  .ant-drawer-close {
    margin-right: 0;
  }

  .ant-drawer-body {
    padding: 0 29px 29px;
  }

  .ant-drawer-content-wrapper {
    width: 500px !important;
  }

  ${({ xs }) =>
    xs &&
    css`
      .ant-drawer-content-wrapper {
        width: 100% !important;
      }

      .ant-drawer-header {
        padding: 17px 22px 0;
      }
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

const BoxTitle = styled(Box)`
  margin-bottom: 30px;

  ${({ xs }) =>
    xs &&
    css`
      margin-bottom: 17px;
    `};
`;

const ImageContainer = styled(Image)`
  width: calc(100% + 58px);
  height: 240px;
  object-fit: cover;
  margin: 0 0 30px -29px;
`;

const TitleMobile = styled(BoxTitle)`
  position: relative;

  .anticon svg {
    position: absolute;
    top: 8px;
    right: 0px;
  }
`;

const DrawerProduct = ({ visible, bannerId, bannerImage, onClose }) => {
  const { xs } = useResponsive();
  const { language } = useLanguage();
  const { t } = useTranslation();

  const apiProductList = useMemo(() => {
    return bannerId && `/list/banner/product/${bannerId}`;
  }, [bannerId]);

  const { data: productList } = useSWR(apiProductList);

  const titleDrawer = useMemo(
    () => (
      <BoxTitle justify="space-between" align="center">
        <Space direction="vertical" size={0}>
          <Typography
            fontSize={28}
            fontWeight={700}
            lineHeight={30}
            color="#044700"
            uppercase
          >
            {t("related_products")}
          </Typography>
          <Line />
        </Space>
        <Icon component={close_icon} onClick={onClose} />
      </BoxTitle>
    ),
    [t, onClose]
  );

  const titleMobile = useMemo(
    () => (
      <TitleMobile justify="center" align="center" xs={xs}>
        <Space direction="vertical" size={3}>
          <Typography
            fontSize={24}
            fontWeight={700}
            lineHeight={26}
            color="#044700"
            uppercase
          >
            {t("related_products")}
          </Typography>
          <Line align="center" />
        </Space>
        <Icon component={close_icon} onClick={onClose} />
      </TitleMobile>
    ),
    [xs, t, onClose]
  );

  return (
    <DrawerContainer
      visible={visible}
      title={xs ? titleMobile : titleDrawer}
      onClose={onClose}
      closeIcon={null}
      xs={xs}
    >
      {!productList && (
        <Space direction="vertical" size={xs ? 40 : 44}>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </Space>
      )}
      {xs === 1 && <ImageContainer src={bannerImage} preview={false} />}
      {productList && (
        <Space direction="vertical" size={xs ? 40 : 44}>
          {productList.map((product) => (
            <RelatedProductCard
              key={product?.productId}
              productId={product?.productId}
              image={product?.image}
              name={product?.productName?.[language]}
              category={product?.category?.[language]}
              owner={product?.productOwner?.[language]}
              price={product?.price}
            />
          ))}
        </Space>
      )}
    </DrawerContainer>
  );
};

export default memo(DrawerProduct);
