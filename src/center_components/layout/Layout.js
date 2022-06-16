import { memo } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "../../styles/common";

const Container = styled(Box)`
  height: 100vh;
`;

const Body = styled.div`
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Layout = ({ children }) => {
  return (
    <Container direction="column">
      <Body>
        <Navbar />
        {children}
      </Body>
      <Footer />
    </Container>
  );
};

export default memo(Layout);
