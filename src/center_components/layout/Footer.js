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
  height: 125px;
  background-color: #f7f7f7;
  padding: 50px 0;

  .ant-col {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${({ sm }) =>
    sm &&
    css`
      height: 70px;
      padding: 18px 0;

      .ant-col {
        flex-direction: column;
      }
    `};
`;

const SpaceSocial = styled(Space)`
  ${({ sm }) =>
    sm &&
    css`
      margin-bottom: 8px;
    `};
`;

const IconSocial = styled(Icon)`
  cursor: pointer;
  font-size: 28px;

  ${({ sm }) =>
    sm &&
    css`
      font-size: 14px;
    `};
`;

const Footer = () => {
  const { sm } = useResponsive();

  return (
    <FooterContainer sm={sm}>
      <Col span={20} offset={2}>
        <SpaceSocial size={sm ? 15 : 40} sm={sm}>
          <IconSocial component={facebook_icon} sm={sm} />
          <IconSocial component={line_icon} sm={sm} />
          <IconSocial component={instagram_icon} sm={sm} />
        </SpaceSocial>
        <Typography
          fontSize={sm ? 12 : 24}
          lineHeight={sm ? 13 : 26}
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
