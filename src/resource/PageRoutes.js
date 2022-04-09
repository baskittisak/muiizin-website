import { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import ProductList from "../components/product/ProductList";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(PageRoutes);
