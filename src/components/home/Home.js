import { memo } from "react";
import styled from "styled-components";
import Navbar from "../../center_components/layout/Navbar";
import Footer from "../../center_components/layout/Footer";
import Banner from "./Banner";
import Quote from "./Quote";
import Story from "./Story";
import ShortListProduct from "../../center_components/product/ShortListProduct";

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
      <ShortListProduct title="New arrivals" />
      <Footer />
    </Container>
  );
};

export default memo(Home);
