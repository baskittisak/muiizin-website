import { memo } from "react";
import { useResponsive } from "../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Image } from "antd";
import banner_image from "../../assets/image/mock_banner.png";

const Container = styled.div`
  margin-top: 120px;

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

  ${({ xs }) =>
    xs &&
    css`
      width: 100vh;
      height: 240px;
    `};
`;

const Banner = () => {
  const { xs } = useResponsive();

  return (
    <Container xs={xs}>
      <ImageContainer src={banner_image} preview={false} xs={xs} />
    </Container>
  );
};

export default memo(Banner);
