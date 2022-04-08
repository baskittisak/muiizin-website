import { memo, useMemo } from "react";
import styled from "styled-components";
import { Box } from "../../styles/common";
import { Image, Row, Col, Space } from "antd";
import quote_image from "../../assets/image/mock_bamboo.jpg";
import Typography from "../../center_components/Typography";

const RowContainer = styled(Row)`
  background-color: #fff;
  max-width: 1440px;
  width: 100%;
  padding: 100px 0;
  margin: auto;
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
`;

const QuoteTitle = styled(Space)`
  position: absolute;
  z-index: 2;
  left: 65px;
  top: 50%;
  transform: translateY(-50%);
`;

const QuoteContent = styled(Box)`
  width: 60%;
  height: 480px;
  padding: 0 26px;
  background-color: #fff4d6;
  position: absolute;
  right: 0;
  text-align: center;
`;

const Quote = () => {
  const propsTitle = useMemo(
    () => ({
      fontSize: 96,
      fontWeight: 700,
      lineHeight: 104,
      color: "#fff",
    }),
    []
  );

  return (
    <RowContainer>
      <Col span={20} offset={2}>
        <BoxContainer align="center">
          <ImageWrapper>
            <ImageContainer src={quote_image} preview={false} />
            <QuoteTitle direction="vertical" size={40}>
              <Typography {...propsTitle}>SIMPLE</Typography>
              <Typography {...propsTitle}>LOCAL</Typography>
              <Typography {...propsTitle}>NATURE</Typography>
            </QuoteTitle>
          </ImageWrapper>
          <QuoteContent justify="center" align="center">
            <Typography
              fontStyle="italic"
              fontSize={24}
              lineHeight={40}
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
    </RowContainer>
  );
};

export default memo(Quote);
