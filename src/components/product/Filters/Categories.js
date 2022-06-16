import { useLanguage } from "../../../utils/useLanguage";
import { memo, useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";
import { Space } from "antd";
import Checkbox from "../../../center_components/Checkbox";
import FiltersCard from "./FiltersCard";
import { useTranslation } from "react-i18next";

const SpaceContainer = styled(Space)`
  width: 100%;
`;

const Categories = ({ categories, categorieList, setCategorieList }) => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  const isOnlyAll = useMemo(() => {
    return categories?.length === 1;
  }, [categories?.length]);

  useEffect(() => {
    if (categories) {
      setCategorieList(() =>
        [...categories].map((categorie) => ({
          ...categorie,
          checked: categorie?.categoryId === 0 || false,
        }))
      );
    }
  }, [categories, setCategorieList]);

  const onChange = useCallback(
    (categoryId) => {
      setCategorieList((prevState) => {
        const newCategorieList = [...prevState];
        const isAll = categoryId === 0;
        const activeKey = newCategorieList.find(
          (category) => category?.categoryId === categoryId
        );
        if (activeKey) {
          activeKey.checked = !activeKey.checked;
        }
        if (isAll && activeKey.checked) {
          newCategorieList.forEach((category) => (category.checked = false));
          activeKey.checked = true;
        }
        if (!isAll) {
          const activeKeyAll = newCategorieList.find(
            (category) => category?.categoryId === 0
          );
          if (activeKeyAll) {
            activeKeyAll.checked = false;
          }
        }
        return newCategorieList;
      });
    },
    [setCategorieList]
  );

  return (
    <FiltersCard title={t("categories")}>
      <SpaceContainer direction="vertical" size={10}>
        {categorieList.map((categorie) => (
          <Checkbox
            key={categorie?.categoryId}
            id={categorie?.categoryId}
            value={categorie?.category?.[language]}
            checked={categorie?.checked}
            onChange={(categoryId) => !isOnlyAll && onChange(categoryId)}
          />
        ))}
      </SpaceContainer>
    </FiltersCard>
  );
};

export default memo(Categories);
