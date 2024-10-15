import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomeScreen from "./screens/home/HomeScreen";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import ResetScreen from "./screens/reset/ResetScreen";
import ProductInfoScreen from "./screens/products/ProductInfoScreen";
import ProductScreen from "./screens/products/ProductScreen";
import CategoryScreen from "./screens/categories/CategoryScreen";
import CategoryListScreen from "./screens/categories/CategoryListScreen";
import ProductListScreen from "./screens/products/ProductListScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="reset" element={<ResetScreen />} />
          <Route path="/categories" element={<CategoryListScreen />} />
          <Route path="/categories/:id" element={<CategoryScreen />} />
          <Route path="/products" element={<ProductScreen />} />
          <Route path="/categories/:id/products" element={<ProductListScreen />} />
          <Route path="/products/:slug" element={<ProductInfoScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
