import { memo, useCallback } from "react";
import { useResponsive } from "../../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Input, Slider, Space } from "antd";
import FiltersCard from "./FiltersCard";
import Typography from "../../../center_components/Typography";
import { useTranslation } from "react-i18next";

const SpaceContainer = styled(Space)`
  width: 100%;

  .ant-space-item:nth-child(odd) {
    width: 100%;
  }
`;

const Range = styled(Slider)`
  outline: none;
  .ant-slider-handle {
    border: solid 2px #044700;
  }

  .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: #044700 !important;
  }
`;

const InputContainer = styled(Input)`
  width: 100%;
  border: 1px solid #e0e0e0;
  padding: 8px;
  outline: none;
  box-shadow: none;
  color: #4f4f4f;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: center;

  :hover {
    border-color: #e0e0e0 !important;
  }

  ${({ md }) =>
    md &&
    css`
      padding: 4px;
      font-size: 11px;
      line-height: 12px;
    `};
`;

const Price = ({ maxPrice, price, setPrice }) => {
  const { md } = useResponsive();
  const { t } = useTranslation();

  const onSetPrice = useCallback(
    (index, value) => {
      setPrice((prevState) => {
        const newPrice = [...prevState];
        newPrice[index] = value;
        return newPrice;
      });
    },
    [setPrice]
  );

  return (
    <FiltersCard title={t("price")}>
      <SpaceContainer direction="vertical" size={md ? 12 : 20}>
        <Range
          min={0}
          max={maxPrice || 1}
          value={price}
          range
          onChange={setPrice}
          trackStyle={{ backgroundColor: "#044700" }}
          handleStyle={{ backgroundColor: "#044700" }}
        />
        <SpaceContainer size={28}>
          <InputContainer
            md={md}
            min={0}
            max={maxPrice || 1}
            type="number"
            value={price[0]}
            onChange={(e) => onSetPrice(0, e.target.value)}
          />
          <Typography
            fontSize={md ? 12 : 20}
            lineHeight={md ? 13 : 22}
            fontWeight={700}
            spacing="0.02em"
            color="#828282"
          >
            to
          </Typography>
          <InputContainer
            md={md}
            min={0}
            max={maxPrice || 1}
            type="number"
            value={price[1]}
            onChange={(e) => onSetPrice(1, e.target.value)}
          />
        </SpaceContainer>
      </SpaceContainer>
    </FiltersCard>
  );
};

export default memo(Price);
