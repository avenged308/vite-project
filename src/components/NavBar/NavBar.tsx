import type { JSX } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar(): JSX.Element {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/login"; // Перенаправляем пользователя на страницу логина после выхода.
    // Удаляем токен из localStorage при выходе.
    // Это "разлогинивает" пользователя.
  };

  // Пользователь логинится
  // Сервер DummyJSON возвращает accessToken
  // Мы сохраняем его в localStorage
  // ProtectedRoute проверяет:
  // если token есть → пускаем
  // если нет → редирект на /login

  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        <li className={style.listElement}>
          <NavLink to="/" className={style.link}>
            Home
          </NavLink>
        </li>

        <li className={style.listElement}>
          <NavLink to="/alcohol" className={style.link}>
            Alcohol
          </NavLink>
        </li>

        <li className={style.listElement}>
          <NavLink to="/contactform" className={style.link}>
            ContactForm
          </NavLink>
        </li>

        <li className={style.listElement}>
          <NavLink to="/carshop" className={style.link}>
            CarShop
          </NavLink>
        </li>

        <li className={style.listElement}>
          <NavLink to="/dog" className={style.link}>
            Dogs
          </NavLink>
        </li>

        <li className={style.listElement}>
          <NavLink to="/userspage" className={style.link}>
            UsersPage
          </NavLink>
        </li>

        <li className={style.listElement}>
          <button onClick={handleLogout}>Logout</button>
        </li>

        <li className={style.listElement}>
          <NavLink to="/bitcoin" className={style.link}>
            Bitcoin Price
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
