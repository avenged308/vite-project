// Создание кастомного хука для использования темы в приложении

import { useContext } from "react";
import type { ThemeContextType } from "./ThemeContext";
import ThemeContext from "./ThemeContext";

// 1. Создание кастомного хука useTheme, который будет использоваться для доступа к данным из ThemeContext.

export default function useTheme(): ThemeContextType {
  // Функция useTheme() — это кастомный хук, который возвращает данные из ThemeContext.
  // Он гарантирует, что внутри компонента будет
  //  доступ к контексту и автоматически выбрасывает ошибку,
  // если хук используется вне ThemeProvider.

  // 2. Получение данных из контекста с помощью useContext

  const context = useContext(ThemeContext);

  // 3. Проверка, что контекст не undefined. 
  // Если контекст undefined, это означает, что компонент, использующий useTheme, не находится внутри ThemeProvider, и выбрасывается ошибка.
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// https://react.dev/reference/react/useContext

//✅ ThemeContext.ts – только контекст.
//✅ ThemeProvider.tsx – провайдер.
//✅ useTheme.ts – хук для удобного использования контекста.