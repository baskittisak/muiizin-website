import { memo, useMemo } from "react";
import { useLanguage } from "../../utils/useLanguage";
import styled from "styled-components";
import { Space, Menu, Dropdown } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as dropdown_icon } from "../../assets/icons/dropdown.svg";
import Typography from "../../center_components/Typography";

const DropdownContainer = styled(Dropdown)`
  cursor: pointer;
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
  const { language } = useLanguage();
  const menuActive = useMemo(() => {
    return menuList.find((menu) => menu.key === orderBy).value[language];
  }, [orderBy, language]);

  const menuOverlay = useMemo(
    () => (
      <Menu>
        {menuList.map((menu) => (
          <Menu.Item key={menu.key} onClick={() => setOrderBy(menu.key)}>
            <Typography
              fontSize={20}
              fontWeight={orderBy === menu.key ? 700 : 400}
              lineHeight={22}
              color="#044700"
            >
              {menu.value[language]}
            </Typography>
          </Menu.Item>
        ))}
      </Menu>
    ),
    [orderBy, language, setOrderBy]
  );

  return (
    <Space size={10}>
      <Typography fontSize={20} lineHeight={22} color="#828282">
        ORDER BY :
      </Typography>
      <DropdownContainer overlay={menuOverlay}>
        <Space size={15}>
          <Typography
            fontSize={20}
            fontWeight={700}
            lineHeight={22}
            color="#044700"
          >
            {menuActive}
          </Typography>
          <Icon component={dropdown_icon} />
        </Space>
      </DropdownContainer>
    </Space>
  );
};

export default memo(OrderBy);
