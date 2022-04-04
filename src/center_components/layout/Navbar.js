import { memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Box } from "../../styles/common";
import { Image, Row, Col, Space } from "antd";
import Typography from "../Typography";
import Translation from "./Translation";
import logo_muizin_green from "../../assets/image/logo_muizin_green.png";

const NavbarContainer = styled(Row)`
  background-color: #fff;
`;

const MENU_NAVBAR = [
  { path: "/", title: "home" },
  { path: "/product", title: "categories" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <NavbarContainer>
      <Col span={20} offset={2}>
        <Box justify="space-between" align="center">
          <Image
            src={logo_muizin_green}
            height={100}
            width={100}
            preview={false}
          />
          <Space size={50}>
            {MENU_NAVBAR.map((menu) => {
              const { path, title } = menu;
              const isActive = path === pathname;
              return (
                <Typography
                  key={path}
                  fontSize={28}
                  lineHeight={30}
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
    </NavbarContainer>
  );
};

export default memo(Navbar);
