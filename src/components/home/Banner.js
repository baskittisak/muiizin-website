import { memo } from "react";
import { useResponsive } from "../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Image } from "antd";
import banner_image from "../../assets/image/mock_banner.png";

const Container = styled.div`
  margin-top: 120px;

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
      width: 100vh;
      height: 350px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      width: 100vh;
      height: 240px;
    `};
`;

const Banner = () => {
  const { md, xs } = useResponsive();

  return (
    <Container md={md} xs={xs}>
      <ImageContainer src={banner_image} preview={false} md={md} xs={xs} />
    </Container>
  );
};

export default memo(Banner);
