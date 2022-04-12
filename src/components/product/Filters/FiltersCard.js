import { memo, useState } from "react";
import styled from "styled-components";
import { Box } from "../../../styles/common";
import Typography from "../../../center_components/Typography";

const Header = styled(Box)`
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid #d9e3d9;
`;

const FiltersCard = ({ title, children }) => {
  const [hidden, setHidden] = useState(false);
  return (
    <>
      <Header justify="space-between" align="center">
        <Typography
          fontSize={20}
          lineHeight={22}
          fontWeight={700}
          spacing="0.02em"
          color="#044700"
          uppercase
        >
          {title}
        </Typography>
        <Typography
          fontSize={24}
          fontWeight={700}
          color="#044700"
          onClick={() => setHidden((prev) => !prev)}
        >
          {hidden ? "+" : "-"}
        </Typography>
      </Header>
      {!hidden && children}
    </>
  );
};

export default memo(FiltersCard);
