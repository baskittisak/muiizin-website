import { memo } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Body = styled.div`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Layout = ({ children }) => {
  return (
    <Body>
      <Navbar />
      {children}
      <Footer />
    </Body>
  );
};

export default memo(Layout);
