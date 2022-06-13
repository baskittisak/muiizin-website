import { memo, useMemo } from "react";
import { useLanguage } from "../../utils/useLanguage";
import styled, { css } from "styled-components";
import { Space, Menu, Dropdown } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as dropdown_icon } from "../../assets/icons/dropdown.svg";
import Typography from "../../center_components/Typography";
import { useResponsive } from "../../utils/useResponsive";
import { useTranslation } from "react-i18next";

const DropdownContainer = styled(Dropdown)`
  cursor: pointer;
`;

const IconDropdown = styled(Icon)`
  ${({ md }) =>
    md &&
    css`
      font-size: 8px;
      position: relative;
      bottom: 1px;
    `};
`;

const menuList = [
  {
    key: "asc",
    value: {
      en: "A to Z",
      th: "ก ถึง ฮ",
    },
  },
  {
    key: "newest",
    value: {
      en: "Newest",
      th: "ใหม่ล่าสุด",
    },
  },
  {
    key: "oldest",
    value: {
      en: "Oldest",
      th: "เก่าที่สุด",
    },
  },
];

const OrderBy = ({ orderBy, setOrderBy }) => {
  const { md } = useResponsive();
  const { language } = useLanguage();
  const { t } = useTranslation();

  const menuActive = useMemo(() => {
    return menuList.find((menu) => menu.key === orderBy).value[language];
  }, [orderBy, language]);

  const menuOverlay = useMemo(
    () => (
      <Menu>
        {menuList.map((menu) => (
          <Menu.Item key={menu.key} onClick={() => setOrderBy(menu.key)}>
            <Typography
              fontSize={md ? 12 : 20}
              lineHeight={md ? 13 : 22}
              fontWeight={orderBy === menu.key ? 700 : 400}
              color="#044700"
            >
              {menu.value[language]}
            </Typography>
          </Menu.Item>
        ))}
      </Menu>
    ),
    [md, orderBy, language, setOrderBy]
  );

  return (
    <Space size={10}>
      <Typography
        fontSize={md ? 12 : 20}
        lineHeight={md ? 13 : 22}
        color="#828282"
      >
        {t("order_by")} :
      </Typography>
      <DropdownContainer overlay={menuOverlay}>
        <Space size={15}>
          <Typography
            fontSize={md ? 12 : 20}
            lineHeight={md ? 13 : 22}
            fontWeight={700}
            color="#044700"
          >
            {menuActive}
          </Typography>
          <IconDropdown component={dropdown_icon} md={md} />
        </Space>
      </DropdownContainer>
    </Space>
  );
};

export default memo(OrderBy);
