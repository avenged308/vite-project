import { useEffect, useState, type JSX } from "react";

export default function Playground(): JSX.Element {
  const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
  const [numberOfBirds, setNumberOfBirds] = useState<number>(10);

  function handleAddDog(): void {
    setNumberOfDogs(numberOfDogs + 1);
  }

  function handleAddBird(): void {
    setNumberOfBirds(numberOfBirds + 10);
  }

  // useEffect
  // позволяет вызвать функцию
  // на каком-нибудь из этапов жизни компонента
  // - принимает колбек функцию и второй опциональный параметр -
  // массив зависимостей

  // Пример 1 - пустой массив зависимостей

  useEffect(() => {
    console.log("UseEffect 1 - только при первой отрисовке ====mount");
  }, []);

  useEffect(() => {
    console.log("UseEffect 2 - при первой отрисовке, при любых изменениях");
  });

  useEffect(() => {
    console.log(
      "UseEffect 3 - при первой отрисовке, при изменении переменной numberOfBirds",
    );
  }, [numberOfBirds]);

  return (
    <div>
      <p>Playground</p>
      <p>Number of dogs: {numberOfDogs}</p>
      <p>Number of birds: {numberOfBirds}</p>
      <button type="button" onClick={handleAddDog}>
        Let the dog in
      </button>
      <button type="button" onClick={handleAddBird}>
        New bird
      </button>
    </div>
  );
}
