import { useState, type JSX } from "react";

export default function InputMirror(): JSX.Element {
  const [text, setText] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setText(event.target.value);
  }

  const containerStyle: React.CSSProperties = {
    padding: "20px",
    fontFamily: "sans-serif",
  };

  return (
    <div style={containerStyle}>
      <label htmlFor="message">
        Введите текст:
        <input
          type="text"
          id="message"
          value={text}
          onChange={handleChange}
          placeholder="Начните вводить ..."
        />
      </label>
      <p>Вы ввели: {text || "ничего"}</p>
    </div>
  );
}
