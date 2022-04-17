import { memo, useState } from "react";
import { useResponsive } from "../../../utils/useResponsive";
import styled, { css } from "styled-components";
import Typography from "../../../center_components/Typography";
import { Space } from "antd";

const Container = styled.div`
  margin-bottom: 100px;

  ${({ md }) =>
    md &&
    css`
      margin-bottom: 78px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      padding: 0 17px;
      margin-bottom: 64px;
    `};
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #d9e3d9;
`;

const Line = styled.div`
  width: 40px;
  height: 3px;
  background-color: #044700;
  margin: auto;

  ${({ md }) =>
    md &&
    css`
      width: 20px;
      height: 2px;
    `};
`;

const DescriptionWrapper = styled.div`
  padding: 28px;
  max-height: 375px;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
    display: block !important;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #d9e3d9;
    border-radius: 5px;
  }

  ${({ md }) =>
    md &&
    css`
      padding: 20px;
      max-height: 230px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      padding: 20px 0;
      max-height: 270px;
      overflow-y: hidden;
      border-bottom: 1px solid #d9e3d9;
      margin-bottom: 12px;

      ::-webkit-scrollbar {
        display: none !important;
      }
    `};

  ${({ xs, more }) =>
    xs &&
    more &&
    css`
      max-height: 100%;
    `};
`;

const DescriptionContainer = styled.div`
  font-family: "DB Adman X";
  font-size: 18px;
  line-height: 25px;
  color: #828282;

  ${({ md }) =>
    md &&
    css`
      font-size: 11px;
      line-height: 15px;
    `};
`;

const ReadButton = styled.div`
  margin: auto;
  width: fit-content;
`;

const Description = ({ description }) => {
  const { md, xs } = useResponsive();
  const [more, setMore] = useState(false);

  return (
    <Container md={md} xs={xs}>
      <Title>
        <Space direction="vertical" size={5}>
          <Typography
            fontSize={md ? 18 : 28}
            fontWeight={700}
            lineHeight={md ? 20 : 30}
            color="#044700"
            uppercase
          >
            Description
          </Typography>
          <Line md={md} />
        </Space>
      </Title>
      <DescriptionWrapper md={md} xs={xs} more={more}>
        <DescriptionContainer
          md={md}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </DescriptionWrapper>
      {xs === 1 && (
        <ReadButton>
          <Typography
            fontSize={14}
            lineHeight={15}
            fontWeight={700}
            color="#8AA399"
            onClick={() => setMore((prev) => !prev)}
          >
            {more ? "Read less" : "Read more"}
          </Typography>
        </ReadButton>
      )}
    </Container>
  );
};

export default memo(Description);
