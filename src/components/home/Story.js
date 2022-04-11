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

  ${({ md }) =>
    md &&
    css`
      height: 245px;
      padding: 60px 178px;
    `};

  ${({ xs }) =>
    xs &&
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
  const { md, xs } = useResponsive();

  return (
    <StoryContainer justify="center" align="center" md={md} xs={xs}>
      <IconFlower
        component={flower_icon}
        size={xs ? 35 : md ? 68 : 125}
        deg="35deg"
        top={xs ? 8 : md ? 20 : 35}
        left={xs ? 5 : md ? 22 : 35}
      />
      <Typography
        fontSize={xs ? 15 : md ? 18 : 36}
        lineHeight={xs ? 24 : md ? 30 : 45}
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
        size={xs ? 45 : md ? 92 : 180}
        deg="-43deg"
        bottom={xs ? 12 : md ? 20 : 40}
        right={5}
      />
    </StoryContainer>
  );
};

export default memo(Story);
