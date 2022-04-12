import { memo, useMemo } from "react";
import styled from "styled-components";
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
`;

const IconCorrect = styled(Icon)`
  font-size: 12px;
`;

const Checkbox = ({ id, value, checked, total, onChange }) => {
  const isTotal = useMemo(() => {
    return total !== undefined;
  }, [total]);

  return (
    <Box justify={isTotal && "space-between"} align="center">
      <CheckboxWrapper align="center" onClick={() => onChange(id)}>
        <CheckboxContainer justify="center" align="center">
          {checked && <IconCorrect component={correct_icon} />}
        </CheckboxContainer>
        <Typography
          fontSize={20}
          lineHeight={22}
          fontWeight={checked ? 700 : 400}
          color={checked ? "#4F4F4F" : "#828282"}
        >
          {value}
        </Typography>
      </CheckboxWrapper>
      {isTotal && (
        <Typography fontSize={20} lineHeight={22} color="#828282">
          ({total})
        </Typography>
      )}
    </Box>
  );
};

export default memo(Checkbox);
