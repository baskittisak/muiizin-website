import styled from "styled-components";

export const Box = styled.div`
  display: flex;
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
