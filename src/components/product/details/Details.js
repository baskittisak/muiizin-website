import { memo, useMemo } from "react";
import { useResponsive } from "../../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Box } from "../../../styles/common";
import { Space } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as line_icon } from "../../../assets/icons/line_order.svg";
import Typography from "../../../center_components/Typography";
import Size from "./options/Size";
import Color from "./options/Color";

const Container = styled.div`
  width: 100%;
  height: 580px;
  margin-left: 40px;

  ${({ md }) =>
    md &&
    css`
      height: 356px;
      margin-left: 20px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      height: 100%;
      margin-left: 0;
      padding: 0 17px;
    `};
`;

const Title = styled(Space)`
  margin-bottom: 30px;

  ${({ md }) =>
    md &&
    css`
      margin-bottom: 16px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      margin-bottom: 0;
    `};
`;

const Options = styled(Space)`
  width: 100%;
  height: 318px;
  padding: 30px 0;
  border: 1px solid #d9e3d9;
  border-left: 0;
  border-right: 0;
  margin-bottom: 30px;

  ${({ md }) =>
    md &&
    css`
      height: 196px;
      padding: 12px 0;
      margin-bottom: 12px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      height: auto;
      padding: 20px 0;
      margin-bottom: 20px;
    `};
`;

const ReadyToShip = styled.div`
  padding: 8px 13px;
  width: fit-content;
  text-align: center;
  background-color: #fff4d6;

  ${({ md }) =>
    md &&
    css`
      padding: 5px 7px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      padding: 7px;
    `};
`;

const OrderButton = styled(Box)`
  cursor: pointer;
  width: 100%;
  padding: 22px 0;
  background-color: #00b900;
  border-radius: 5px;
  margin-top: 14px;

  ${({ md }) =>
    md &&
    css`
      padding: 14px 0;
      margin-top: 10px;
    `};

  ${({ md }) =>
    md &&
    css`
      padding: 12px 0;
      margin-top: 0;
    `};
`;

const IconLine = styled(Icon)`
  font-size: 28px;
  margin-left: 10px;

  ${({ md }) =>
    md &&
    css`
      font-size: 16px;
      margin-left: 5px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      font-size: 12px;
    `};
`;

const BoxPrice = styled(Box)`
  margin: 11px 0 20px;
`;

const Details = ({
  productName,
  productOwner,
  size,
  color,
  price,
  activeSize,
  setActiveSize,
  activeColor,
  setActiveColor,
}) => {
  const { width, xs } = useResponsive();

  const isMd = useMemo(() => {
    return width < 1150 ? 1 : 0;
  }, [width]);

  return (
    <Container md={isMd} xs={xs}>
      <Title
        direction="vertical"
        size={xs ? 5 : isMd ? 9 : 12}
        md={isMd}
        xs={xs}
      >
        <Typography
          fontSize={xs ? 18 : isMd ? 20 : 36}
          lineHeight={xs ? 20 : isMd ? 22 : 39}
          fontWeight={700}
          color="#044700"
          whiteSpace="initial"
        >
          {productName}
        </Typography>
        <Typography
          fontSize={isMd ? 14 : 24}
          lineHeight={isMd ? 15 : 26}
          color="#8FA29A"
        >
          {productOwner}
        </Typography>
      </Title>
      {xs === 1 && (
        <BoxPrice justify="space-between" align="center">
          <Typography
            fontSize={24}
            lineHeight={26}
            fontWeight={700}
            color="#333333"
            uppercase
          >
            ฿ {price}
          </Typography>
          <ReadyToShip xs={xs}>
            <Typography
              fontSize={12}
              lineHeight={13}
              fontWeight={700}
              color="#584207"
            >
              Ready to ship
            </Typography>
          </ReadyToShip>
        </BoxPrice>
      )}
      <Options
        direction="vertical"
        size={xs ? 20 : isMd ? 12 : 30}
        md={isMd}
        xs={xs}
      >
        {size && (
          <Size
            size={size}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
          />
        )}
        {color && (
          <Color
            colorList={color}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />
        )}
        {xs === 0 && (
          <ReadyToShip md={isMd}>
            <Typography
              fontSize={isMd ? 12 : 18}
              lineHeight={isMd ? 13 : 20}
              fontWeight={700}
              color="#584207"
            >
              Ready to ship
            </Typography>
          </ReadyToShip>
        )}
      </Options>
      {xs === 0 && (
        <Box justify="space-between" align="center">
          <Typography
            fontSize={isMd ? 22 : 36}
            lineHeight={isMd ? 24 : 39}
            fontWeight={700}
            color="#333333"
            uppercase
          >
            Pirce
          </Typography>
          <Typography
            fontSize={isMd ? 22 : 36}
            lineHeight={isMd ? 24 : 39}
            fontWeight={700}
            color="#333333"
            uppercase
          >
            ฿ {price}
          </Typography>
        </Box>
      )}
      <OrderButton justify="center" align="center" md={isMd} xs={xs}>
        <Box justify="center" align="center">
          <Typography
            fontSize={xs ? 16 : isMd ? 18 : 28}
            lineHeight={xs ? 17 : isMd ? 20 : 30}
            fontWeight={700}
            color="#FFFFFF"
          >
            Order via
          </Typography>
          <IconLine component={line_icon} md={isMd} xs={xs} />
        </Box>
      </OrderButton>
    </Container>
  );
};

export default memo(Details);
