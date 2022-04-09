import { memo } from "react";
import { useResponsive } from "../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Box } from "../../styles/common";
import Typography from "../../center_components/Typography";
import Icon from "@ant-design/icons";
import { ReactComponent as flower_icon } from "../../assets/icons/flower.svg";

const StoryContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 420px;
  padding: 120px 240px;
  background-color: #d9e3d9;
  text-align: center;

  ${({ sm }) =>
    sm &&
    css`
      height: 200px;
      padding: 52px 17px;
    `};
`;

const IconFlower = styled(Icon)`
  position: absolute;
  opacity: 0.35;
  font-size: ${({ size }) => `${size}px`};
  transform: ${({ deg }) => `rotate(${deg})`};
  top: ${({ top }) => top && `${top}px`};
  bottom: ${({ bottom }) => bottom && `${bottom}px`};
  left: ${({ left }) => left && `${left}px`};
  right: ${({ right }) => right && `${right}px`};
`;

const Story = () => {
  const { sm } = useResponsive();

  return (
    <StoryContainer justify="center" align="center" sm={sm}>
      <IconFlower
        component={flower_icon}
        size={sm ? 35 : 125}
        deg="35deg"
        top={sm ? 8 : 35}
        left={sm ? 5 : 35}
      />
      <Typography
        fontSize={sm ? 15 : 36}
        lineHeight={sm ? 24 : 45}
        color="#044700"
        whiteSpace="initial"
      >
        Products from local handicrafts, It is a natural product called
        <strong>“Muiizin”</strong> Whether it is woven fabrics, scarves,
        tablecloths, cloth bags, woven bags. They were all created from the
        heart of <strong>“Muiizin”</strong> who wanted to support villagers in
        communities in every region of Thailand.
      </Typography>
      <IconFlower
        component={flower_icon}
        size={sm ? 45 : 180}
        deg="-43deg"
        bottom={sm ? 12 : 40}
        right={5}
      />
    </StoryContainer>
  );
};

export default memo(Story);
