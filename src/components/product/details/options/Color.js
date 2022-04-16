import { memo, useMemo } from "react";
import styled, { css } from "styled-components";
import { Box } from "../../../../styles/common";
import { Space } from "antd";
import Typography from "../../../../center_components/Typography";

const LineOption = styled.div`
  width: 20px;
  height: 3px;
  background-color: #4f4f4f;
`;

const ColorBox = styled(Box)`
  cursor: pointer;
  width: 36px;
  height: 36px;
  border: 1.5px solid #e0e0e0;
  border-radius: 100%;

  ${({ active }) =>
    active &&
    css`
      border: 1.5px solid #4f4f4f;
    `};
`;

const DisplayColor = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 100%;
  background-color: ${({ color }) => color};
`;

const Color = ({ colorList, activeColor, setActiveColor }) => {
  const displaySizeList = useMemo(() => {
    return colorList.map((color, index) => {
      const isActive = color === activeColor;
      return (
        <ColorBox
          key={index}
          justify="center"
          align="center"
          active={isActive}
          onClick={() => setActiveColor(color)}
        >
          <DisplayColor color={color} />
        </ColorBox>
      );
    });
  }, [colorList, activeColor, setActiveColor]);

  return (
    <Space direction="vertical" size={15}>
      <Space direction="vertical" size={5}>
        <Typography
          fontSize={20}
          lineHeight={22}
          fontWeight={700}
          color="#4F4F4F"
          uppercase
        >
          Color
        </Typography>
        <LineOption />
      </Space>
      <Space size={20}>{displaySizeList}</Space>
    </Space>
  );
};

export default memo(Color);
