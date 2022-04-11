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

  ${({ xs }) =>
    xs &&
    css`
      width: 170px;
      height: 295px;
    `};
`;

const ImageContainer = styled(Box)`
  width: 280px;
  height: 290px;
  background-color: #f7f7f7;

  ${({ xs }) =>
    xs &&
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
  const { xs } = useResponsive();

  const propsDescription = useMemo(
    () => ({
      fontSize: xs ? 10 : 14,
      lineHeight: xs ? 11 : 15,
      color: "#828282",
    }),
    [xs]
  );

  const propsPrice = useMemo(
    () => ({
      fontSize: xs ? 16 : 24,
      lineHeight: xs ? 17 : 26,
      fontWeight: 700,
    }),
    [xs]
  );

  const displayPrice = useMemo(() => {
    if (newPrice) {
      return (
        <SpaceNewPrice size={8}>
          <Typography {...propsPrice}>฿ {newPrice}</Typography>
          <Typography
            fontSize={xs ? 12 : 16}
            lineHeight={xs ? 11 : 17}
            color="#BDBDBB"
          >
            ฿ {price}
          </Typography>
        </SpaceNewPrice>
      );
    } else {
      return <Typography {...propsPrice}>฿ {price}</Typography>;
    }
  }, [newPrice, price, propsPrice, xs]);

  return (
    <Container xs={xs}>
      <Space direction="vertical" size={xs ? 0 : 10}>
        <Space direction="vertical" size={xs ? 0 : 5}>
          <Space direction="vertical" size={xs ? 9 : 14}>
            <ImageContainer justify="center" align="center" xs={xs}>
              <Image
                src={image}
                preview={false}
                width={xs ? 140 : 200}
                height={xs ? 140 : 200}
              />
            </ImageContainer>
            <TextOverFlow>
              <Typography
                fontSize={xs ? 14 : 18}
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
