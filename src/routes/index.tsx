import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import Category from "../components/categoryList";
import ProductList from "../components/productList";
import NotFound from "../components/notFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
