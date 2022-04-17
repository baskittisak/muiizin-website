import { memo, useMemo } from "react";
import { useResponsive } from "../../../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Box } from "../../../../styles/common";
import { Space } from "antd";
import Typography from "../../../../center_components/Typography";

const LineOption = styled.div`
  width: 20px;
  height: 3px;
  background-color: #4f4f4f;

  ${({ md }) =>
    md &&
    css`
      width: 10px;
      height: 1.5px;
    `};
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

  ${({ md }) =>
    md &&
    css`
      width: 22px;
      height: 22px;
    `};
`;

const Size = ({ size, activeSize, setActiveSize }) => {
  const { width } = useResponsive();

  const isMd = useMemo(() => {
    return width < 1150 ? 1 : 0;
  }, [width]);

  const sizeList = useMemo(() => {
    return size.map((size, index) => {
      const isActive = size === activeSize;
      return (
        <SizeBox
          key={index}
          justify="center"
          align="center"
          active={isActive}
          md={isMd}
          onClick={() => setActiveSize(size)}
        >
          <Typography
            fontSize={isMd ? 12 : 18}
            lineHeight={isMd ? 13 : 20}
            fontWeight={isActive ? 700 : 400}
            color={isActive ? "#4F4F4F" : "#828282"}
          >
            {size}
          </Typography>
        </SizeBox>
      );
    });
  }, [isMd, size, activeSize, setActiveSize]);

  return (
    <Space direction="vertical" size={isMd ? 10 : 15}>
      <Space direction="vertical" size={isMd ? 0 : 5}>
        <Typography
          fontSize={isMd ? 13 : 20}
          lineHeight={isMd ? 14 : 22}
          fontWeight={700}
          color="#4F4F4F"
          uppercase
        >
          Size
        </Typography>
        <LineOption md={isMd} />
      </Space>
      <Space size={isMd ? 10 : 20}>{sizeList}</Space>
    </Space>
  );
};

export default memo(Size);
