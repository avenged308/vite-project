import { useState, type JSX } from "react";
type Theme = "light" | "dark";

export default function ThemeSwitcher():JSX.Element {
    const [ theme, setTheme ] = useState<Theme>("light");

    function toggleTheme(): void {
        setTheme((prev: Theme) => (prev === "light" ? "dark" : "light"));
    }

    const pageStyle: React.CSSProperties =
    theme === "light"
      ? { backgroundColor: "#ffffff", color: "#000000", height: "100vh", padding: "20px" }
      : { backgroundColor: "#000000", color: "#ffffff", height: "100vh", padding: "20px" };

  return (
    <div style={pageStyle}>
      <h2>Текущая тема: {theme}</h2>
      <button onClick={toggleTheme}>Сменить тему</button>
    </div>
  )
}

// Theme — тип с ограниченными строковыми литералами ("light" | "dark").

// useState<Theme> — указывает, что состояние может принимать только эти два значения.

// toggleTheme(): void — функция ничего не возвращает.

// pageStyle: React.CSSProperties — встроенный тип React для inline-стилей.

// Компонент возвращает JSX.Element.