import { memo } from "react";
import styled, { css } from "styled-components";
import Typo from "antd/lib/typography";

const TypoContainer = styled(Typo)`
  white-space: ${({ space }) => space};
  font-size: ${({ size }) => `${size}px`};
  line-height: ${({ height }) => `${height}px`};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};

  ${({ shadow }) =>
    shadow &&
    css`
      text-shadow: ${shadow};
    `};

  ${({ spacing }) =>
    spacing &&
    css`
      letter-spacing: ${spacing};
    `};

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `};

  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
    `};
`;

const Typography = ({
  fontSize = 28,
  lineHeight = 30,
  fontWeight = 400,
  color = "var(--black-200)",
  whiteSpace = "pre",
  textShadow,
  spacing,
  uppercase,
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
      onClick={onClick && onClick}
    >
      {children}
    </TypoContainer>
  );
};

export default memo(Typography);
