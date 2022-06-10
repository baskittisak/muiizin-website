import styled from "styled-components";
import { Spin } from "antd";

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
