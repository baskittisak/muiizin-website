import { memo, useMemo } from "react";
import { useResponsive } from "../../../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Box } from "../../../../styles/common";
import { Space } from "antd";
import Typography from "../../../../center_components/Typography";
import { useTranslation } from "react-i18next";

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

  ${({ md }) =>
    md &&
    css`
      width: 22px;
      height: 22px;
    `};
`;

const DisplayColor = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 100%;
  background-color: ${({ color }) => color};

  ${({ md }) =>
    md &&
    css`
      width: 16px;
      height: 16px;
    `};
`;

const Color = ({ colorList, activeColor, setActiveColor }) => {
  const { width } = useResponsive();
  const { t } = useTranslation();

  const isMd = useMemo(() => {
    return width < 1150 ? 1 : 0;
  }, [width]);

  const displaySizeList = useMemo(() => {
    return colorList?.map((color) => {
      const isActive = color?.id === activeColor;
      return (
        <ColorBox
          key={color?.id}
          justify="center"
          align="center"
          active={isActive}
          md={isMd}
          onClick={() => setActiveColor(color?.id)}
        >
          <DisplayColor color={color?.code} md={isMd} />
        </ColorBox>
      );
    });
  }, [isMd, colorList, activeColor, setActiveColor]);

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
          {t("color")}
        </Typography>
        <LineOption md={isMd} />
      </Space>
      <Space size={isMd ? 10 : 20}>{displaySizeList}</Space>
    </Space>
  );
};

export default memo(Color);
