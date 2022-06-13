import { memo, useMemo } from "react";
import { useResponsive } from "../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Box } from "../../styles/common";
import { Image, Row, Col, Space } from "antd";
import quote_image from "../../assets/image/mock_bamboo.jpg";
import Typography from "../../center_components/Typography";
import { useTranslation } from "react-i18next";

const RowContainer = styled(Row)`
  background-color: #fff;
  width: 100%;
  padding: 100px 0;

  ${({ md }) =>
    md &&
    css`
      padding: 58px 0;
    `};

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

  ${({ md }) =>
    md &&
    css`
      width: 376.46px;
      height: 348.75px;
    `};

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

  ${({ md }) =>
    md &&
    css`
      height: 280px;
      padding: 90px 13px;
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
  const { xxl, md, xs } = useResponsive();
  const { t } = useTranslation();

  const propsTitle = useMemo(
    () => ({
      fontSize: xs ? 64 : md ? 56 : 96,
      fontWeight: 700,
      lineHeight: xs ? 69 : md ? 61 : 104,
      color: "#fff",
    }),
    [md, xs]
  );

  return (
    <RowContainer md={md} xs={xs}>
      <Col span={xs ? 22 : 20} offset={xs ? 1 : 2}>
        <BoxContainer direction={xs && "column"} align="center">
          <ImageWrapper>
            <ImageContainer src={quote_image} preview={false} md={md} xs={xs} />
            <QuoteTitle direction="vertical" size={xs ? 10 : 40} xs={xs}>
              <Typography {...propsTitle}>{t("simple")}</Typography>
              <Typography {...propsTitle}>{t("local")}</Typography>
              <Typography {...propsTitle}>{t("nature")}</Typography>
            </QuoteTitle>
          </ImageWrapper>
          <QuoteContent
            justify="center"
            align="center"
            xxl={xxl}
            md={md}
            xs={xs}
          >
            <Typography
              fontStyle="italic"
              fontSize={xs ? 12 : md ? 14 : 24}
              lineHeight={xs ? 18 : md ? 24 : 40}
              color="#584207"
              whiteSpace="initial"
            >
              {t("quote_content")}
            </Typography>
          </QuoteContent>
        </BoxContainer>
      </Col>
      <Col span={xs ? 1 : 2} />
    </RowContainer>
  );
};

export default memo(Quote);
