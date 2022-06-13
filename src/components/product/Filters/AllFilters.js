import { memo, useMemo, useState } from "react";
import { useResponsive } from "../../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Drawer, Space } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as filter_icon } from "../../../assets/icons/filter.svg";
import { ReactComponent as close_icon } from "../../../assets/icons/close.svg";
import Search from "./Search";
import Categories from "./Categories";
import Price from "./Price";
import { Box } from "../../../styles/common";
import Typography from "../../../center_components/Typography";
import { useTranslation } from "react-i18next";
// import Color from "./Color";
// import Size from "./Size";

const SpaceContainer = styled(Space)`
  width: 100%;

  ${({ xs }) =>
    xs &&
    css`
      .ant-space-item:first-child {
        width: 100%;
      }
    `};
`;

const DrawerContainer = styled(Drawer)`
  .ant-drawer-header {
    padding: 22px 22px 0;
  }

  .ant-drawer-header-title {
    justify-content: flex-end;
  }

  .ant-drawer-close {
    margin-right: 0;
  }

  .ant-drawer-body {
    padding: 0 22px 22px;
    text-align: center;
  }

  .ant-drawer-content-wrapper {
    width: 100% !important;
  }
`;

const FilterDrawer = styled.div`
  margin-top: 24px;
  width: 100%;
`;

const ConfirmButton = styled(Box)`
  cursor: pointer;
  width: fit-content;
  padding: 5px 18px;
  background-color: #fff4d6;
  margin: 40px auto;
`;

const AllFilters = ({
  categories,
  maxPrice,
  search,
  categorieList,
  price,
  setSearch,
  setCategorieList,
  setPrice,
}) => {
  const { md, xs } = useResponsive();
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  // const [colorList, setColorList] = useState([]);
  // const [sizeList, setSizeList] = useState([]);

  const filters = useMemo(
    () => (
      <SpaceContainer direction="vertical" size={md ? 30 : 40}>
        <Categories
          categories={categories}
          categorieList={categorieList}
          setCategorieList={setCategorieList}
        />
        <Price maxPrice={maxPrice} price={price} setPrice={setPrice} />
        {/* <Color colorList={colorList} setColorList={setColorList} />*/}
        {/* <Size sizeList={sizeList} setSizeList={setSizeList} /> */}
      </SpaceContainer>
    ),
    [md, categories, categorieList, maxPrice, price, setPrice, setCategorieList]
  );

  return (
    <>
      <SpaceContainer
        direction={xs ? "horizontal" : "vertical"}
        size={xs ? 10 : md ? 20 : 30}
        xs={xs}
      >
        <Search search={search} setSearch={setSearch} />
        {xs === 0 && filters}
        {xs === 1 && (
          <Icon component={filter_icon} onClick={() => setVisible(true)} />
        )}
      </SpaceContainer>
      {xs === 1 && (
        <DrawerContainer
          visible={visible}
          onClose={() => setVisible(false)}
          closeIcon={<Icon component={close_icon} />}
        >
          <FilterDrawer>
            {filters}
            <ConfirmButton
              justify="center"
              align="center"
              onClick={() => setVisible(false)}
            >
              <Typography
                fontSize={14}
                lineHeight={15}
                fontWeight={700}
                color="#584207"
              >
                {t("confirm")}
              </Typography>
            </ConfirmButton>
          </FilterDrawer>
        </DrawerContainer>
      )}
    </>
  );
};

export default memo(AllFilters);
