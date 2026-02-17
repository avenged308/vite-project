import type { JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Alcohol from "./components/Alcohol/Alcohol";
import ContactForm from "./components/ContactForm/ContactForm";
import CarShop from "./components/CarShop/CarShop";
import Dog from "./components/Dog/Dog";
import UsersPage from "./components/UsersPage/UsersPage";
import Home from "./components/Home/Home";
import UserPage from "./components/UserPage/UserPage";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import Bitcoin from "./components/BitcoinPriceComponent/BitcoinPriceComponent";

function App(): JSX.Element {
  return (
    <Routes>
      {/* Публичный маршрут для страницы логина */}
      <Route path="/login" element={<LoginPage />} />
      {/* Это обычный маршрут:
      /login доступен всегда
      не проверяется токен
      не обёрнут в ProtectedRoute */}

      <Route element={<ProtectedRoute />}>
        {/* Все маршруты внутри ProtectedRoute защищённые */}
        {/* Если нет токена — редирект на /login */}
        {/* Если есть — рендерится Layout + страница */}\
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/alcohol" element={<Alcohol />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/carshop" element={<CarShop />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/userspage" element={<UsersPage />} />
          <Route path="/userspage/:userId" element={<UserPage />} />
          <Route path="/bitcoin" element={<Bitcoin/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
