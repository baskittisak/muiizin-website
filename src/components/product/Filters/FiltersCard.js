import { memo, useState } from "react";
import { useResponsive } from "../../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Box } from "../../../styles/common";
import Typography from "../../../center_components/Typography";

const Header = styled(Box)`
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid #d9e3d9;

  ${({ md }) =>
    md &&
    css`
      padding-bottom: 6px;
    `};
`;

const FiltersCard = ({ title, children }) => {
  const { md } = useResponsive();
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <Header justify="space-between" align="center" md={md}>
        <Typography
          fontSize={md ? 12 : 20}
          lineHeight={md ? 13 : 22}
          fontWeight={700}
          spacing="0.02em"
          color="#044700"
          uppercase
        >
          {title}
        </Typography>
        <Typography
          fontSize={md ? 18 : 24}
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
