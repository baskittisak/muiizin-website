import { memo } from "react";
import { useResponsive } from "../../utils/useResponsive";
import styled, { css } from "styled-components";
import { Row, Col, Space } from "antd";
import Typography from "../../center_components/Typography";
import Icon from "@ant-design/icons";
import { ReactComponent as facebook_icon } from "../../assets/icons/facebook.svg";
import { ReactComponent as line_icon } from "../../assets/icons/line.svg";
import { ReactComponent as instagram_icon } from "../../assets/icons/instagram.svg";

const FooterContainer = styled(Row)`
  width: 100%;
  height: 125px;
  background-color: #f7f7f7;
  padding: 50px 0;

  .ant-col {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${({ md }) =>
    md &&
    css`
      height: 75px;
      padding: 30px 0;
    `};

  ${({ xs }) =>
    xs &&
    css`
      height: 70px;
      padding: 18px 0;

      .ant-col {
        flex-direction: column;
      }
    `};
`;

const SpaceSocial = styled(Space)`
  ${({ xs }) =>
    xs &&
    css`
      margin-bottom: 8px;
    `};
`;

const IconSocial = styled(Icon)`
  cursor: pointer;
  font-size: 28px;

  ${({ md }) =>
    md &&
    css`
      font-size: 16px;
    `};

  ${({ xs }) =>
    xs &&
    css`
      font-size: 14px;
    `};
`;

const Footer = () => {
  const { md, xs } = useResponsive();

  return (
    <FooterContainer md={md} xs={xs}>
      <Col span={20} offset={2}>
        <SpaceSocial size={xs ? 15 : md ? 20 : 40} xs={xs}>
          <IconSocial component={facebook_icon} md={md} xs={xs} />
          <IconSocial component={line_icon} md={md} xs={xs} />
          <IconSocial component={instagram_icon} md={md} xs={xs} />
        </SpaceSocial>
        <Typography
          fontSize={xs ? 12 : md ? 14 : 24}
          lineHeight={xs ? 13 : md ? 15 : 26}
          color="#044700"
        >
          © 2022 Muiizin Co., Ltd
        </Typography>
      </Col>
      <Col span={2} />
    </FooterContainer>
  );
};

export default memo(Footer);
