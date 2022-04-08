import { memo } from "react";
import styled from "styled-components";
import { Box } from "../../styles/common";
import { Image, Space } from "antd";
import Typography from "../Typography";

const Container = styled.div`
  width: 280px;
`;

const ImageContainer = styled(Box)`
  width: 280px;
  height: 290px;
  background-color: #f7f7f7;
`;

const TextOverFlow = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const SpaceNewPrice = styled(Space)`
  align-items: baseline;

  .ant-space-item:last-child > .ant-typography {
    text-decoration-line: line-through;
  }
`;

const ProductCard = ({ image, name, category, owner, price, newPrice }) => {
  return (
    <Container>
      <Space direction="vertical" size={10}>
        <Space direction="vertical" size={5}>
          <Space direction="vertical" size={14}>
            <ImageContainer justify="center" align="center">
              <Image src={image} preview={false} width={200} height={200} />
            </ImageContainer>
            <TextOverFlow>
              <Typography fontWeight={700} whiteSpace="initial">
                {name}
              </Typography>
            </TextOverFlow>
          </Space>
          <Space size={5}>
            <Typography fontSize={14} lineHeight={15} color="#828282">
              {category}
            </Typography>
            <Typography fontSize={14} lineHeight={15} color="#828282">
              |
            </Typography>
            <Typography fontSize={14} lineHeight={15} color="#828282">
              {owner}
            </Typography>
          </Space>
        </Space>
        {newPrice && (
          <SpaceNewPrice size={8}>
            <Typography fontSize={24} lineHeight={26} fontWeight={700}>
              ฿ {newPrice}
            </Typography>
            <Typography fontSize={16} lineHeight={17} color="#BDBDBB">
              ฿ {price}
            </Typography>
          </SpaceNewPrice>
        )}
        {!newPrice && (
          <Typography fontSize={24} lineHeight={26} fontWeight={700}>
            ฿ {price}
          </Typography>
        )}
      </Space>
    </Container>
  );
};

export default memo(ProductCard);
