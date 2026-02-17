import { useEffect, useState, type JSX } from "react";
import style from "./Alcohol.module.css";

export default function Alcohol(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");

  async function loadAlcohol(): Promise<void> {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    );
    const obj = await res.json();
    const { drinks } = obj;
    const { strDrinkThumb, strDrink } = drinks[0];
    setName(strDrink);
    setImage(strDrinkThumb);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadAlcohol();
  }, []);

  return (
    <div>
      <h1>Alcohol: {name}</h1>
      <div className={style.container}>
        <img src={image} alt={name} />
      </div>
      <div className={style.btnContainer}>
        <button type="button" onClick={() => loadAlcohol()}>
          NEXT IMAGE
        </button>
      </div>
    </div>
  );
}
