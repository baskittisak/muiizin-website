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

const SizeBox = styled(Box)`
  cursor: pointer;
  width: 36px;
  height: 36px;
  border: 1.5px solid #e0e0e0;

  ${({ active }) =>
    active &&
    css`
      border: 1.5px solid #4f4f4f;
    `};
`;

const Size = ({ size, activeSize, setActiveSize }) => {
  const sizeList = useMemo(() => {
    return size.map((size, index) => {
      const isActive = size === activeSize;
      return (
        <SizeBox
          key={index}
          justify="center"
          align="center"
          active={isActive}
          onClick={() => setActiveSize(size)}
        >
          <Typography
            fontSize={18}
            lineHeight={20}
            fontWeight={isActive ? 700 : 400}
            color={isActive ? "#4F4F4F" : "#828282"}
          >
            {size}
          </Typography>
        </SizeBox>
      );
    });
  }, [size, activeSize, setActiveSize]);

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
          Size
        </Typography>
        <LineOption />
      </Space>
      <Space size={20}>{sizeList}</Space>
    </Space>
  );
};

export default memo(Size);
