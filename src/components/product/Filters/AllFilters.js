import { memo } from "react";
import styled from "styled-components";
import { Space } from "antd";
import Search from "./Search";
import Categories from "./Categories";
import Price from "./Price";
import Color from "./Color";
import Size from "./Size";

const SpaceContainer = styled(Space)`
  width: 100%;
`;

const AllFilters = () => {
  return (
    <SpaceContainer direction="vertical" size={30}>
      <Search />
      <SpaceContainer direction="vertical" size={40}>
        <Categories />
        <Price />
        <Color />
        <Size />
      </SpaceContainer>
    </SpaceContainer>
  );
};

export default memo(AllFilters);
