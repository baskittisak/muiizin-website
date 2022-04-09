import { memo, useMemo } from "react";
import { useResponsive } from "../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Box } from "../../styles/common";
import { Image, Space } from "antd";
import Typography from "../Typography";

const Container = styled.div`
  position: relative;
  width: 280px;
  height: 400px;

  > .ant-space > .ant-space-item:last-child {
    position: absolute;
    bottom: 0;
  }

  ${({ sm }) =>
    sm &&
    css`
      width: 170px;
      height: 295px;
    `};
`;

const ImageContainer = styled(Box)`
  width: 280px;
  height: 290px;
  background-color: #f7f7f7;

  ${({ sm }) =>
    sm &&
    css`
      width: 170px;
      height: 200px;
    `};
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
  const { sm } = useResponsive();

  const propsDescription = useMemo(
    () => ({
      fontSize: sm ? 10 : 14,
      lineHeight: sm ? 11 : 15,
      color: "#828282",
    }),
    [sm]
  );

  const propsPrice = useMemo(
    () => ({
      fontSize: sm ? 16 : 24,
      lineHeight: sm ? 17 : 26,
      fontWeight: 700,
    }),
    [sm]
  );

  const displayPrice = useMemo(() => {
    if (newPrice) {
      return (
        <SpaceNewPrice size={8}>
          <Typography {...propsPrice}>฿ {newPrice}</Typography>
          <Typography
            fontSize={sm ? 12 : 16}
            lineHeight={sm ? 11 : 17}
            color="#BDBDBB"
          >
            ฿ {price}
          </Typography>
        </SpaceNewPrice>
      );
    } else {
      return <Typography {...propsPrice}>฿ {price}</Typography>;
    }
  }, [newPrice, price, propsPrice, sm]);

  return (
    <Container sm={sm}>
      <Space direction="vertical" size={sm ? 0 : 10}>
        <Space direction="vertical" size={sm ? 0 : 5}>
          <Space direction="vertical" size={sm ? 9 : 14}>
            <ImageContainer justify="center" align="center" sm={sm}>
              <Image
                src={image}
                preview={false}
                width={sm ? 140 : 200}
                height={sm ? 140 : 200}
              />
            </ImageContainer>
            <TextOverFlow>
              <Typography
                fontSize={sm ? 14 : 18}
                fontWeight={700}
                whiteSpace="initial"
              >
                {name}
              </Typography>
            </TextOverFlow>
          </Space>
          <Space size={5}>
            <Typography {...propsDescription}>{category}</Typography>
            <Typography {...propsDescription}>|</Typography>
            <Typography {...propsDescription}>{owner}</Typography>
          </Space>
        </Space>
        {displayPrice}
      </Space>
    </Container>
  );
};

export default memo(ProductCard);
