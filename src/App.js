import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';
import RegisterScreen from './screens/register/RegisterScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomeScreen />} />
          <Route path="blogs" element={<LoginScreen />} />
          <Route path="contact" element={<RegisterScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
