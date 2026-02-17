import { useEffect, useState, type JSX } from "react";
import style from "./dog.module.css";

export default function Dog():JSX.Element {
    const [ image, setImage ] = useState<string>("");
    
    async function loadDog(): Promise<void> {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const obj = await res.json();
        const { message } = obj;
        setImage(message);
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadDog();
    }, [])

  return (
    <div className={style.mainDiv}>
        <h1>Random dogs: </h1>
        <div className={style.container}>
            <img src={image} alt="img" />
        </div>
        <div className={style.btnContainer}>
        <button type="button" onClick={() => loadDog()}>
          NEXT IMAGE
        </button>
      </div>
    </div>
  )
}
