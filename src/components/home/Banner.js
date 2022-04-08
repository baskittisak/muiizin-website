import { memo } from "react";
import styled from "styled-components";
import { Image } from "antd";
import banner_image from "../../assets/image/mock_banner.png";

const Container = styled.div`
  margin-top: 120px;
`;

const ImageContainer = styled(Image)`
  width: 100%;
  height: calc(100vh - 120px);
  object-fit: cover;
`;

const Banner = () => {
  return (
    <Container>
      <ImageContainer src={banner_image} preview={false} />
    </Container>
  );
};

export default memo(Banner);
