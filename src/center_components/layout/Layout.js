import { memo } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Container = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default memo(Layout);
