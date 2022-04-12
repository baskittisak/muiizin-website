import { memo, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Space } from "antd";
import Checkbox from "../../../center_components/Checkbox";
import FiltersCard from "./FiltersCard";

const SpaceContainer = styled(Space)`
  width: 100%;
`;

const allSize = [
  {
    key: "s",
    value: "S",
    total: 15,
  },
  {
    key: "m",
    value: "M",
    total: 10,
  },
  {
    key: "l",
    value: "L",
    total: 8,
  },
  {
    key: "xl",
    value: "XL",
    total: 5,
  },
];

const Size = ({ sizeList, setSizeList }) => {
  useEffect(() => {
    if (allSize) {
      setSizeList(() =>
        [...allSize].map((size) => ({
          ...size,
          checked: false,
        }))
      );
    }
  }, [setSizeList]);

  const onChange = useCallback(
    (id) => {
      setSizeList((prevState) => {
        const newsizeList = [...prevState];
        const activeKey = newsizeList.find((size) => size.key === id);
        if (activeKey) {
          activeKey.checked = !activeKey.checked;
        }
        return newsizeList;
      });
    },
    [setSizeList]
  );

  return (
    <FiltersCard title="size">
      <SpaceContainer direction="vertical" size={10}>
        {sizeList.map((size) => (
          <Checkbox
            key={size.key}
            id={size.key}
            value={size.value}
            checked={size.checked}
            total={size.total}
            onChange={onChange}
          />
        ))}
      </SpaceContainer>
    </FiltersCard>
  );
};

export default memo(Size);
