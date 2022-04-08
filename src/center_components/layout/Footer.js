import { memo } from "react";
import styled from "styled-components";
import { Row, Col, Space } from "antd";
import Typography from "../../center_components/Typography";
import Icon from "@ant-design/icons";
import { ReactComponent as facebook_icon } from "../../assets/icons/facebook.svg";
import { ReactComponent as line_icon } from "../../assets/icons/line.svg";
import { ReactComponent as instagram_icon } from "../../assets/icons/instagram.svg";

const FooterContainer = styled(Row)`
  height: 125px;
  max-width: 1440px;
  background-color: #f7f7f7;
  padding: 50px 0;

  .ant-col {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const IconSocial = styled(Icon)`
  cursor: pointer;
  font-size: 28px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Col span={20} offset={2}>
        <Space size={40}>
          <IconSocial component={facebook_icon} />
          <IconSocial component={line_icon} />
          <IconSocial component={instagram_icon} />
        </Space>
        <Typography fontSize={24} lineHeight={26} color="#044700">
          © 2022 Muiizin Co., Ltd
        </Typography>
      </Col>
    </FooterContainer>
  );
};

export default memo(Footer);
