import { Image, Space } from "antd";
import { memo, useMemo } from "react";
import styled, { css } from "styled-components";
import { Box, TextOverFlow } from "../../styles/common";
import { useResponsive } from "../../utils/useResponsive";
import Typography from "../Typography";

const Container = styled(Box)`
  width: 100%;
  height: 166px;

  ${({ xs }) =>
    xs &&
    css`
      height: 100px;
    `};
`;

const ImageContainer = styled(Box)`
  width: 166px;
  height: 166px;
  background-color: #f7f7f7;
  margin-right: 15px;

  ${({ xs }) =>
    xs &&
    css`
      margin-right: 20px;
      width: 100px;
      height: 100px;
    `};
`;

const DetailContainer = styled(Box)`
  height: 166px;

  ${({ xs }) =>
    xs &&
    css`
      height: 100px;
    `};
`;

const SpaceNewPrice = styled(Space)`
  align-items: baseline;

  .ant-space-item:last-child > .ant-typography {
    text-decoration-line: line-through;
  }
`;

const SeeMore = styled(Box)`
  cursor: pointer;
  width: fit-content;
  padding: 8px 22px;
  background-color: #fff4d6;

  ${({ xs }) =>
    xs &&
    css`
      padding: 5px 18px;
    `};
`;

const RelatedProductCard = ({
  image,
  name,
  category,
  owner,
  price,
  newPrice,
}) => {
  const { xs } = useResponsive();

  const propsDescription = useMemo(
    () => ({
      fontSize: xs ? 12 : 14,
      lineHeight: xs ? 13 : 15,
      color: "#828282",
    }),
    [xs]
  );

  const propsPrice = useMemo(
    () => ({
      fontSize: xs ? 18 : 24,
      lineHeight: xs ? 20 : 26,
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
            lineHeight={xs ? 13 : 17}
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
      <ImageContainer justify="center" align="center" xs={xs}>
        <Image
          src={image}
          preview={false}
          width={xs ? 80 : 120}
          height={xs ? 80 : 120}
        />
      </ImageContainer>
      <DetailContainer direction="column" justify="space-between" xs={xs}>
        <Space direction="vertical" size={xs ? 0 : 5}>
          <TextOverFlow>
            <Typography
              fontSize={xs ? 16 : 18}
              lineHeight={xs ? 17 : 20}
              fontWeight={700}
              whiteSpace="initial"
            >
              {name}
            </Typography>
          </TextOverFlow>
          <Space size={5}>
            <Typography {...propsDescription}>{category}</Typography>
            <Typography {...propsDescription}>|</Typography>
            <Typography {...propsDescription}>{owner}</Typography>
          </Space>
        </Space>
        {displayPrice}
        <SeeMore justify="center" align="center" xs={xs}>
          <Typography
            fontSize={xs ? 14 : 18}
            lineHeight={xs ? 15 : 20}
            fontWeight={700}
            color="#584207"
          >
            See more
          </Typography>
        </SeeMore>
      </DetailContainer>
    </Container>
  );
};

export default memo(RelatedProductCard);