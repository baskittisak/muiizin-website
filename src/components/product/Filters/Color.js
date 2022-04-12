import { memo, useCallback, useEffect } from "react";
import { useLanguage } from "../../../utils/useLanguage";
import styled from "styled-components";
import { Space } from "antd";
import Checkbox from "../../../center_components/Checkbox";
import FiltersCard from "./FiltersCard";

const colors = [
  {
    key: "black",
    value: {
      en: "Black",
      th: "ดำ",
    },
    total: 15,
  },
  {
    key: "white",
    value: {
      en: "White",
      th: "ขาว",
    },
    total: 10,
  },
  {
    key: "blue",
    value: {
      en: "Blue",
      th: "น้ำเงิน",
    },
    total: 8,
  },
];

const SpaceContainer = styled(Space)`
  width: 100%;
`;

const Color = ({colorList, setColorList}) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (colors) {
      setColorList(() =>
        [...colors].map((color) => ({
          ...color,
          checked: false,
        }))
      );
    }
  }, [setColorList]);

  const onChange = useCallback((id) => {
    setColorList((prevState) => {
      const newcolorList = [...prevState];
      const activeKey = newcolorList.find((color) => color.key === id);
      if (activeKey) {
        activeKey.checked = !activeKey.checked;
      }
      return newcolorList;
    });
  }, [setColorList]);

  return (
    <FiltersCard title="Color">
      <SpaceContainer direction="vertical" size={10}>
        {colorList.map((color) => (
          <Checkbox
            key={color.key}
            id={color.key}
            value={color.value[language]}
            checked={color.checked}
            total={color.total}
            onChange={onChange}
          />
        ))}
      </SpaceContainer>
    </FiltersCard>
  );
};

export default memo(Color);
