import { memo } from "react";
import styled, { css } from "styled-components";
import Typo from "antd/lib/typography";

const TypoContainer = styled(Typo)`
  white-space: ${({ space }) => space};
  font-size: ${({ size }) => `${size}px`};
  line-height: ${({ height }) => `${height}px`};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  letter-spacing: ${({ spacing }) => spacing};

  ${({ shadow }) =>
    shadow &&
    css`
      text-shadow: ${shadow};
    `};

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `};

  ${({ fontStyle }) =>
    fontStyle &&
    css`
      font-style: ${fontStyle};
    `};

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `};
`;

const Typography = ({
  fontSize = 18,
  lineHeight = 20,
  fontWeight = 400,
  color = "#4F4F4F",
  whiteSpace = "pre",
  textShadow,
  spacing,
  uppercase,
  fontStyle,
  children,
  onClick,
}) => {
  return (
    <TypoContainer
      size={fontSize}
      height={lineHeight}
      weight={fontWeight}
      color={color}
      space={whiteSpace}
      shadow={textShadow}
      spacing={spacing}
      uppercase={uppercase ? 1 : 0}
      fontStyle={fontStyle}
      onClick={onClick && onClick}
    >
      {children}
    </TypoContainer>
  );
};

export default memo(Typography);
