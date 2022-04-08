import { memo } from "react";
import styled from "styled-components";
import Navbar from "../../center_components/layout/Navbar";
import Banner from "./Banner";

const Container = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Banner />
    </Container>
  );
};

export default memo(Home);
