import styled from "styled-components";
import { Empty, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const Box = styled.div`
  display: flex !important;
  flex-direction: ${({ direction }) => direction && direction};
  justify-content: ${({ justify }) => justify && justify};
  align-items: ${({ align }) => align && align};
`;

export const TextOverFlow = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: ${({ line }) => line || 2};
  -webkit-box-orient: vertical;
`;

export const SpinLoading = styled(Spin)`
  max-height: initial;
  .ant-spin-dot-item {
    background-color: #044700;
  }
`;

export const LoadingIcon = styled(LoadingOutlined)`
  font-size: 64px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  svg path {
    fill: #044700;
  }
`;

export const EmptyData = styled(Empty)`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
