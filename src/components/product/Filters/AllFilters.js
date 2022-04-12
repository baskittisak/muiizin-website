import { memo, useState } from "react";
import { useResponsive } from "../../../utils/useResponsive";
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
  const { md } = useResponsive();
  const [search, setSearch] = useState("");
  const [categorieList, setCategorieList] = useState([]);
  const [price, setPrice] = useState([1, 1000]);
  const [colorList, setColorList] = useState([]);
  const [sizeList, setSizeList] = useState([]);

  return (
    <SpaceContainer direction="vertical" size={md ? 20 : 30}>
      <Search search={search} setSearch={setSearch} />
      <SpaceContainer direction="vertical" size={md ? 30 : 40}>
        <Categories
          categorieList={categorieList}
          setCategorieList={setCategorieList}
        />
        <Price price={price} setPrice={setPrice} />
        <Color colorList={colorList} setColorList={setColorList} />
        <Size sizeList={sizeList} setSizeList={setSizeList} />
      </SpaceContainer>
    </SpaceContainer>
  );
};

export default memo(AllFilters);
