import { memo } from "react";
import styled from "styled-components";
import Navbar from "../../center_components/layout/Navbar";
import Banner from "./Banner";
import Quote from "./Quote";
import Story from "./Story";

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
      <Quote />
      <Story />
    </Container>
  );
};

export default memo(Home);
