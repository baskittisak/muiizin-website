import { memo } from "react";
import Layout from "../../center_components/layout/Layout";
import Banner from "./Banner";
import Quote from "./Quote";
import Story from "./Story";
import ShortListProduct from "../../center_components/product/ShortListProduct";
import useSWR from "swr";
import { LoadingIcon } from "../../styles/common";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const { data: bannerList } = useSWR("/list/banner");
  const { data: productList } = useSWR("/list/product/arrivals");

  if (!bannerList) return <LoadingIcon />;

  return (
    <Layout>
      <Banner bannerList={bannerList} />
      <Quote />
      <Story />
      <ShortListProduct title={t("new_arrivals")} productList={productList} />
    </Layout>
  );
};

export default memo(Home);
