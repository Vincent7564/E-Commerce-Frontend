import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddProduct from "../Pages//Admin/AddProduct";
import PageError from "../Pages/PageError";
import ProductDetail from '../Pages/ProductDetail';
import View from "../Pages/View";
import EditProduct from "../Pages/Admin/EditProduct";
import Profile from "../Pages/Profile";

const RouteList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/search/:search" element={<View />} />
        <Route path="*" element={<PageError />} />
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteList;
