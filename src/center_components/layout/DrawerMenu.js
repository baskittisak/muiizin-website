import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Drawer, Space } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as close_icon } from "../../assets/icons/close.svg";
import Translation from "./Translation";
import Typography from "../Typography";

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

const SpaceMenu = styled(Space)`
  margin-top: 72px;
  width: 100%;
`;

const DrawerMenu = ({ visible, menuList, onClose }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const onNavigate = useCallback(
    (path) => {
      navigate(path);
      onClose();
    },
    [navigate, onClose]
  );

  return (
    <DrawerContainer
      visible={visible}
      onClose={onClose}
      closeIcon={<Icon component={close_icon} />}
    >
      <SpaceMenu direction="vertical" size={100}>
        <Translation onClose={onClose} />
        <Space direction="vertical" size={40}>
          {menuList.map((menu) => {
            const { path, title } = menu;
            const isProduct =
              path === "/product" && pathname === "/product-detail";
            const isActive = path === pathname || isProduct;
            return (
              <Typography
                key={path}
                fontSize={32}
                lineHeight={35}
                fontWeight={700}
                color={isActive ? "#044700" : "#8FA29A"}
                onClick={() => onNavigate(path)}
              >
                {t(`${title}`)}
              </Typography>
            );
          })}
        </Space>
      </SpaceMenu>
    </DrawerContainer>
  );
};

export default memo(DrawerMenu);
