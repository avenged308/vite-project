import type { JSX } from "react";

interface Props {
    brand: string;
    price: number;
    gears: number;
    image: string;
}

export default function Motorcycle(props: Props):JSX.Element {
    const { brand, price, gears, image } = props;
  return (
    <div style={{backgroundColor: "whitesmoke", color: "black"}}>
              <img
        src={image}
        alt={brand}
        width={220}
        style={{ display: "block", marginBottom: 8 }}
      />
      Brand: {brand} Price: {price} Gears: {gears}
    </div>
  )
}