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
      height: 356;
      margin-left: 20px;
    `};
`;

const Title = styled(Space)`
  margin-bottom: 30px;

  ${({ md }) =>
    md &&
    css`
      margin-bottom: 16px;
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
  const { width } = useResponsive();

  const isMd = useMemo(() => {
    return width < 1150 ? 1 : 0;
  }, [width]);

  return (
    <Container md={isMd}>
      <Title direction="vertical" size={isMd ? 9 : 12} md={isMd}>
        <Typography
          fontSize={isMd ? 20 : 36}
          lineHeight={isMd ? 22 : 39}
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
      <Options direction="vertical" size={isMd ? 12 : 30} md={isMd}>
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
      </Options>
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
      <OrderButton justify="center" align="center" md={isMd}>
        <Box justify="center" align="center">
          <Typography
            fontSize={isMd ? 18 : 28}
            lineHeight={isMd ? 20 : 30}
            fontWeight={700}
            color="#FFFFFF"
          >
            Order via
          </Typography>
          <IconLine component={line_icon} md={isMd} />
        </Box>
      </OrderButton>
    </Container>
  );
};

export default memo(Details);
