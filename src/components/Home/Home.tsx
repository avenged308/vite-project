import type { JSX } from "react";
import style from "./Home.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={style.mainContainer}>
      <div className={style.content}>
        Добро пожаловать на главную страницу!  
        <br />
        Выберите раздел из навигационного меню, чтобы ознакомиться с
        различными компонентами и функциональностью нашего приложения.
      </div>
    </div>
  );
}