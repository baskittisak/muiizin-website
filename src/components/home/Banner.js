import { memo, useState } from "react";
import { useResponsive } from "../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Image } from "antd";
import banner_image from "../../assets/image/mock_banner.png";
import DrawerProduct from "./DrawerProduct";

const Container = styled.div`
  margin-top: 120px;
  text-align: center;
  cursor: pointer;

  ${({ md }) =>
    md &&
    css`
      margin-top: 100px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      margin-top: 60px;
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
`;

const Banner = () => {
  const { md, xs } = useResponsive();
  const [visible, setVisible] = useState(false);

  return (
    <Container md={md} xs={xs}>
      <ImageContainer
        src={banner_image}
        preview={false}
        md={md}
        xs={xs}
        onClick={() => setVisible(true)}
      />
      <DrawerProduct visible={visible} onClose={() => setVisible(false)} />
    </Container>
  );
};

export default memo(Banner);
