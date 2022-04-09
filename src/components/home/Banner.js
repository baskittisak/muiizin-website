import { memo } from "react";
import styled, { css } from "styled-components";
import { useResponsive } from "../../utils/useResponsive";
import { Image } from "antd";
import banner_image from "../../assets/image/mock_banner.png";

const Container = styled.div`
  margin-top: 120px;

  ${({ sm }) =>
    sm &&
    css`
      margin-top: 60px;
    `};
`;

const ImageContainer = styled(Image)`
  width: 100%;
  height: calc(100vh - 120px);
  object-fit: cover;

  ${({ sm }) =>
    sm &&
    css`
      width: 100vh;
      height: 240px;
    `};
`;

const Banner = () => {
  const { sm } = useResponsive();

  return (
    <Container sm={sm}>
      <ImageContainer src={banner_image} preview={false} sm={sm} />
    </Container>
  );
};

export default memo(Banner);
