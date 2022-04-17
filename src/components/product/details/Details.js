import { memo } from "react";
import styled from "styled-components";
import { Box } from "../../../styles/common";
import { Space } from "antd";
import Typography from "../../../center_components/Typography";
import Size from "./options/Size";
import Color from "./options/Color";
import Icon from "@ant-design/icons";
import { ReactComponent as line_icon } from "../../../assets/icons/line_order.svg";

const Container = styled.div`
  width: 100%;
  height: 580px;
  margin-left: 40px;
`;

const Title = styled(Space)`
  margin-bottom: 30px;
`;

const Options = styled(Space)`
  width: 100%;
  height: 318px;
  padding: 30px 0;
  border: 1px solid #d9e3d9;
  border-left: 0;
  border-right: 0;
  margin-bottom: 30px;
`;

const ReadyToShip = styled.div`
  padding: 8px 13px;
  width: fit-content;
  text-align: center;
  background-color: #fff4d6;
`;

const OrderButton = styled(Box)`
  cursor: pointer;
  width: 100%;
  padding: 22px 0;
  background-color: #00b900;
  border-radius: 5px;
  margin-top: 14px;
`;

const IconLine = styled(Icon)`
  font-size: 28px;
  margin-left: 10px;
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
  return (
    <Container>
      <Title direction="vertical" size={12}>
        <Typography
          fontSize={36}
          lineHeight={39}
          fontWeight={700}
          color="#044700"
          whiteSpace="initial"
        >
          {productName}
        </Typography>
        <Typography fontSize={24} lineHeight={26} color="#8FA29A">
          {productOwner}
        </Typography>
      </Title>
      <Options direction="vertical" size={30}>
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
        <ReadyToShip>
          <Typography
            fontSize={18}
            lineHeight={20}
            fontWeight={700}
            color="#584207"
          >
            Ready to ship
          </Typography>
        </ReadyToShip>
      </Options>
      <Box justify="space-between" align="center">
        <Typography
          fontSize={36}
          lineHeight={39}
          fontWeight={700}
          color="#333333"
          uppercase
        >
          Pirce
        </Typography>
        <Typography
          fontSize={36}
          lineHeight={39}
          fontWeight={700}
          color="#333333"
          uppercase
        >
          ฿ {price}
        </Typography>
      </Box>
      <OrderButton justify="center" align="center">
        <Box justify="center" align="center">
          <Typography
            fontSize={28}
            lineHeight={30}
            fontWeight={700}
            color="#FFFFFF"
          >
            Order via
          </Typography>
          <IconLine component={line_icon} />
        </Box>
      </OrderButton>
    </Container>
  );
};

export default memo(Details);
