import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';
import RegisterScreen from './screens/register/RegisterScreen';
import ResetScreen from './screens/reset/ResetScreen';
import ProductInfoScreen from './screens/products/ProductInfoScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomeScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="reset" element={<ResetScreen />} />
          <Route path="/products/:productId" element={<ProductInfoScreen/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
