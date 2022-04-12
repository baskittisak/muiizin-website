import { memo, useMemo } from "react";
import { useResponsive } from "../utils/useResponsive";
import styled, { css } from "styled-components";
import { Box } from "../styles/common";
import Icon from "@ant-design/icons";
import { ReactComponent as correct_icon } from "../assets/icons/correct.svg";
import Typography from "./Typography";

const CheckboxWrapper = styled(Box)`
  cursor: pointer;
`;

const CheckboxContainer = styled(Box)`
  width: 14px;
  height: 14px;
  background: #e9e9e9;
  border-radius: 2px;
  margin-right: 10px;

  ${({ md }) =>
    md &&
    css`
      width: 8.68px;
      height: 8.68px;
    `};
`;

const IconCorrect = styled(Icon)`
  font-size: 12px;

  ${({ md }) =>
    md &&
    css`
      font-size: 10px;
    `};
`;

const Checkbox = ({ id, value, checked, total, onChange }) => {
  const { md } = useResponsive();

  const isTotal = useMemo(() => {
    return total !== undefined;
  }, [total]);

  return (
    <Box justify={isTotal && "space-between"} align="center">
      <CheckboxWrapper align="center" onClick={() => onChange(id)} md={md}>
        <CheckboxContainer justify="center" align="center">
          {checked && <IconCorrect component={correct_icon} md={md} />}
        </CheckboxContainer>
        <Typography
          fontSize={md ? 12 : 20}
          lineHeight={md ? 13 : 22}
          fontWeight={checked ? 700 : 400}
          color={checked ? "#4F4F4F" : "#828282"}
        >
          {value}
        </Typography>
      </CheckboxWrapper>
      {isTotal && (
        <Typography
          fontSize={md ? 12 : 20}
          lineHeight={md ? 13 : 22}
          color="#828282"
        >
          ({total})
        </Typography>
      )}
    </Box>
  );
};

export default memo(Checkbox);
