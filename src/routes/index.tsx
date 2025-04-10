import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
// import Home from "../pages/Home";
// import ProductDetails from "../pages/ProductDetails";
// import Checkout from "../pages/Checkout";
// import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
