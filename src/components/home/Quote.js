import { memo, useMemo } from "react";
import { useResponsive } from "../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Box } from "../../styles/common";
import { Image, Row, Col, Space } from "antd";
import quote_image from "../../assets/image/mock_bamboo.jpg";
import Typography from "../../center_components/Typography";

const RowContainer = styled(Row)`
  background-color: #fff;
  width: 100%;
  padding: 100px 0;

  ${({ xs }) =>
    xs &&
    css`
      padding: 48px 0;
    `};
`;

const BoxContainer = styled(Box)`
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ImageContainer = styled(Image)`
  width: 650px;
  height: 600px;

  ${({ xs }) =>
    xs &&
    css`
      width: 355px;
      height: 285px;
    `};
`;

const QuoteTitle = styled(Space)`
  position: absolute;
  z-index: 2;
  left: 65px;
  top: 50%;
  transform: translateY(-50%);

  ${({ xs }) =>
    xs &&
    css`
      text-align: center;
      left: 50%;
      transform: translate(-50%, -50%);
    `};
`;

const QuoteContent = styled(Box)`
  width: 60%;
  height: 480px;
  padding: 0 26px;
  background-color: #fff4d6;
  position: absolute;
  right: 0;
  text-align: center;

  ${({ xxl }) =>
    xxl &&
    css`
      width: 80%;
    `};

  ${({ xs }) =>
    xs &&
    css`
      position: initial;
      width: 355px;
      height: 120px;
      padding: 24px 12px;
    `};
`;

const Quote = () => {
  const { xs, xxl } = useResponsive();

  const propsTitle = useMemo(
    () => ({
      fontSize: xs ? 64 : 96,
      fontWeight: 700,
      lineHeight: xs ? 69 : 104,
      color: "#fff",
    }),
    [xs]
  );

  return (
    <RowContainer xs={xs}>
      <Col span={xs ? 22 : 20} offset={xs ? 1 : 2}>
        <BoxContainer direction={xs && "column"} align="center">
          <ImageWrapper>
            <ImageContainer src={quote_image} preview={false} xs={xs} />
            <QuoteTitle direction="vertical" size={xs ? 10 : 40} xs={xs}>
              <Typography {...propsTitle}>SIMPLE</Typography>
              <Typography {...propsTitle}>LOCAL</Typography>
              <Typography {...propsTitle}>NATURE</Typography>
            </QuoteTitle>
          </ImageWrapper>
          <QuoteContent justify="center" align="center" xxl={xxl} xs={xs}>
            <Typography
              fontStyle="italic"
              fontSize={xs ? 12 : 24}
              lineHeight={xs ? 18 : 40}
              color="#584207"
              whiteSpace="initial"
            >
              From the love of local wisdom that tells about the way of the
              community village life. Create handicrafts that come from nature
              and diverse cultures. Each piece is hand-woven with natural dyes.
              Take the time to do it carefully. We produce various appliances
              for nature lovers.
            </Typography>
          </QuoteContent>
        </BoxContainer>
      </Col>
      <Col span={xs ? 1 : 2} />
    </RowContainer>
  );
};

export default memo(Quote);
