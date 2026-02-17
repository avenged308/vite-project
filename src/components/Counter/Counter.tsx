import { useState, type JSX } from "react";
import style from "./Counter.module.css";

export default function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  // создали переменную состояния counter
  // и функцию setCounter для изменения состояния
  // useState -  это хук
  // в круглых скобках начальное состояние переменной состояния
  // хук useState  принимает начальное значение переменной состояния
  // возвращает массив в котором на первом месте переменная состояния
  // а на втором месте функция  сетер
  // Хук - это функция которая используется только внутри компонента
  // В жизненном цикле компонента React есть 3 фазы:
  // Сборка (mounting)
  // Обновление (updating)
  // Разборка (unmounting)

  function handlePlus(): void {
    setCounter(counter + 1);
  }

  function handleMinus(): void {
    setCounter(counter - 1);
  }

  function handlePlusHundred(): void {
    setCounter(counter + 100);
  }

  function handleReset(): void {
    setCounter(0);
  }

  return (
    <div className={style.divMoney}>
      <h1>Добавление денег</h1>
      <img
        src="https://img.freepik.com/free-psd/money-illustration-isolated_23-2151568514.jpg?semt=ais_hybrid&w=740&q=80"
        alt="money"
      />
      <div className={style.btnContainer}>
        <button type="button" onClick={handleReset} className={style.btn}>Reset to 0</button>
        <button type="button" onClick={handleMinus} className={style.btn}>-</button>
            <span className={style.counterSpan}>{counter}</span>
        <button type="button" onClick={handlePlus} className={style.btn}>+</button>
        <button type="button" onClick={handlePlusHundred} className={style.btn}>+100</button>
      </div>
    </div>
  );
}
