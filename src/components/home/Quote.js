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

  ${({ sm }) =>
    sm &&
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

  ${({ sm }) =>
    sm &&
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

  ${({ sm }) =>
    sm &&
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

  ${({ sm }) =>
    sm &&
    css`
      position: initial;
      width: 355px;
      height: 120px;
      padding: 24px 12px;
    `};
`;

const Quote = () => {
  const { sm, xxl } = useResponsive();

  const propsTitle = useMemo(
    () => ({
      fontSize: sm ? 64 : 96,
      fontWeight: 700,
      lineHeight: sm ? 69 : 104,
      color: "#fff",
    }),
    [sm]
  );

  return (
    <RowContainer sm={sm}>
      <Col span={sm ? 22 : 20} offset={sm ? 1 : 2}>
        <BoxContainer direction={sm && "column"} align="center">
          <ImageWrapper>
            <ImageContainer src={quote_image} preview={false} sm={sm} />
            <QuoteTitle direction="vertical" size={sm ? 10 : 40} sm={sm}>
              <Typography {...propsTitle}>SIMPLE</Typography>
              <Typography {...propsTitle}>LOCAL</Typography>
              <Typography {...propsTitle}>NATURE</Typography>
            </QuoteTitle>
          </ImageWrapper>
          <QuoteContent justify="center" align="center" xxl={xxl} sm={sm}>
            <Typography
              fontStyle="italic"
              fontSize={sm ? 12 : 24}
              lineHeight={sm ? 18 : 40}
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
      <Col span={sm ? 1 : 2} />
    </RowContainer>
  );
};

export default memo(Quote);
