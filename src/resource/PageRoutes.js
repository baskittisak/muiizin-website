import { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(PageRoutes);