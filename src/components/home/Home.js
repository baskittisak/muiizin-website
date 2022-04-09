import { memo } from "react";
import Layout from "../../center_components/layout/Layout";
import Banner from "./Banner";
import Quote from "./Quote";
import Story from "./Story";
import ShortListProduct from "../../center_components/product/ShortListProduct";

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Quote />
      <Story />
      <ShortListProduct title="New arrivals" />
    </Layout>
  );
};

export default memo(Home);
