import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddProduct from "../Pages//Admin/AddProduct";
import PageError from "../Pages/PageError";
import ProductDetail from '../Pages/ProductDetail';
import View from "../Pages/View";

const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product-detail" element={<ProductDetail />} /> {/* temporary */}
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/view" element={<View />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;
