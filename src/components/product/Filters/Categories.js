import { useLanguage } from "../../../utils/useLanguage";
import { memo, useCallback, useEffect } from "react";
import { Space } from "antd";
import Checkbox from "../../../center_components/Checkbox";
import FiltersCard from "./FiltersCard";

const categories = [
  {
    key: "all",
    value: {
      en: "All",
      th: "ทั้งหมด",
    },
  },
  {
    key: "bags",
    value: {
      en: "Bags",
      th: "ทั้งหมด",
    },
  },
  {
    key: "hats",
    value: {
      en: "Hats",
      th: "หมวก",
    },
  },
];

const Categories = ({ categorieList, setCategorieList }) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (categories) {
      setCategorieList(() =>
        [...categories].map((categorie) => ({
          ...categorie,
          checked: categorie.key === "all" || false,
        }))
      );
    }
  }, [setCategorieList]);

  const onChange = useCallback(
    (id) => {
      setCategorieList((prevState) => {
        const newCategorieList = [...prevState];
        const activeKey = newCategorieList.find(
          (categorie) => categorie.key === id
        );
        if (activeKey) {
          activeKey.checked = !activeKey.checked;
        }
        return newCategorieList;
      });
    },
    [setCategorieList]
  );

  return (
    <FiltersCard title="CATEGORIES">
      <Space direction="vertical" size={10}>
        {categorieList.map((categorie) => (
          <Checkbox
            key={categorie.key}
            id={categorie.key}
            value={categorie.value[language]}
            checked={categorie.checked}
            onChange={onChange}
          />
        ))}
      </Space>
    </FiltersCard>
  );
};

export default memo(Categories);
