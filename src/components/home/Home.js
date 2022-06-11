import { memo, useMemo } from "react";
import Layout from "../../center_components/layout/Layout";
import Banner from "./Banner";
import Quote from "./Quote";
import Story from "./Story";
import ShortListProduct from "../../center_components/product/ShortListProduct";
import useSWR from "swr";
import { LoadingIcon } from "../../styles/common";

const Home = () => {
  const { data: bannerList } = useSWR("/list/banner");
  const { data: productList } = useSWR("/list/product/arrivals");

  const isLoading = useMemo(() => {
    return !bannerList || !productList;
  }, [bannerList, productList]);

  if (isLoading) return <LoadingIcon />;

  return (
    <Layout>
      <Banner bannerList={bannerList} />
      <Quote />
      <Story />
      <ShortListProduct title="New arrivals" productList={productList} />
    </Layout>
  );
};

export default memo(Home);
