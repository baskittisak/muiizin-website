import { memo, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useResponsive } from "../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Box } from "../../styles/common";
import { Image, Row, Col, Space } from "antd";
import Typography from "../Typography";
import Translation from "./Translation";
import Icon from "@ant-design/icons";
import { ReactComponent as hamburger_menu } from "../../assets/icons/hamburger_menu.svg";
import logo_muizin_green from "../../assets/image/logo_muizin_green.png";

const RowContainer = styled(Row)`
  background-color: #fff;
  height: 120px;
  width: 100%;
  z-index: 5;
  align-items: center;
  position: fixed;
  top: 0;

  ${({ md }) =>
    md &&
    css`
      height: 100px;
    `};
`;

const HamburgerContainer = styled(Box)`
  position: relative;
  height: 60px;
  background-color: #fff;
  width: 100%;
  z-index: 5;
  position: fixed;
  top: 0;

  .anticon svg {
    font-size: 20px;
    position: absolute;
    top: 20px;
    right: 17px;
  }
`;

const MENU_NAVBAR = [
  { path: "/", title: "home" },
  { path: "/product", title: "categories" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { md, xs } = useResponsive();

  const desktopNavbar = useMemo(
    () => (
      <RowContainer md={md}>
        <Col span={20} offset={2}>
          <Box justify="space-between" align="center">
            <Image
              src={logo_muizin_green}
              width={md ? 80 : 100}
              height={md ? 80 : 100}
              preview={false}
            />
            <Space size={md ? 40 : 50}>
              {MENU_NAVBAR.map((menu) => {
                const { path, title } = menu;
                const isActive = path === pathname;
                return (
                  <Typography
                    key={path}
                    fontSize={md ? 20 : 28}
                    lineHeight={md ? 22 : 30}
                    fontWeight={700}
                    color={isActive ? "#044700" : "#8FA29A"}
                    onClick={() => navigate(path)}
                  >
                    {t(`${title}`)}
                  </Typography>
                );
              })}
            </Space>
            <Translation />
          </Box>
        </Col>
        <Col span={2} />
      </RowContainer>
    ),
    [pathname, md, navigate, t]
  );

  const hamburgerMenu = useMemo(
    () => (
      <HamburgerContainer align="center" justify="center">
        <Image src={logo_muizin_green} height={60} width={60} preview={false} />
        <Icon component={hamburger_menu} />
      </HamburgerContainer>
    ),
    []
  );

  return xs ? hamburgerMenu : desktopNavbar;
};

export default memo(Navbar);
