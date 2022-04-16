import { memo, useMemo } from "react";
import { useResponsive } from "../../utils/useResponsive";
import { useLanguage } from "../../utils/useLanguage";
import { productList } from "../../resource/mock_data/productList";
import styled, { css } from "styled-components";
import { Box } from "../../styles/common";
import { Drawer, Image, Space } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as close_icon } from "../../assets/icons/close.svg";
import banner_image from "../../assets/image/mock_banner.png";
import Typography from "../../center_components/Typography";
import RelatedProductCard from "../../center_components/product/RelatedProductCard";

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

const DrawerProduct = ({ visible, onClose }) => {
  const { xs } = useResponsive();
  const { language } = useLanguage();

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
            Related Products
          </Typography>
          <Line />
        </Space>
        <Icon component={close_icon} onClick={onClose} />
      </BoxTitle>
    ),
    [onClose]
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
            Related Products
          </Typography>
          <Line align="center" />
        </Space>
        <Icon component={close_icon} onClick={onClose} />
      </TitleMobile>
    ),
    [xs, onClose]
  );

  return (
    <DrawerContainer
      visible={visible}
      title={xs ? titleMobile : titleDrawer}
      onClose={onClose}
      closeIcon={null}
      xs={xs}
    >
      {xs === 1 && <ImageContainer src={banner_image} preview={false} />}
      <Space direction="vertical" size={xs ? 40 : 44}>
        {productList.map((product) => (
          <RelatedProductCard
            key={product.id}
            productId={product.id}
            image={product.images[0]}
            name={product.name[language]}
            category={product.category[language]}
            owner={product.owner[language]}
            price={product.price}
            newPrice={product?.newPrice}
          />
        ))}
      </Space>
    </DrawerContainer>
  );
};

export default memo(DrawerProduct);
