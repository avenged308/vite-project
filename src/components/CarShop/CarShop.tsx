import type { JSX } from "react";
import Car from "../Car/Car";
import Motorcycle from "../Motorcycle/Motorcycle";

export default function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      {/* ВЫЗЫВАЕМ */}
      <Car brand={"Mercedes"} color={"green"} />
      <Car brand={"Tesla"} color={"black"} />
      <Car brand={"Lada"} color={"yellow"} />
      <Car brand={"Honda"} color={"pink"} />
      <Car brand={"KIA"} color={"white"} />
      <Car brand={"Audi"} color={"brown"} />
      <Car brand={"Opel"} color={"blue"} />
      <Car brand={"BYD"} color={"yellowgreen"} />
      <h2>Motorcycles</h2>
      <Motorcycle
        brand={"Yamaha MT-07"}
        price={7800}
        gears={6}
        image={
          "https://cdn2.yamaha-motor.eu/prod/product-assets/2023/MT07A/2023-Yamaha-MT07A-EU-Cyan_Storm-360-Degrees-001-03_Mobile.jpg"
        }
      />
      <Motorcycle
        brand={"Kawasaki Ninja 650"}
        price={8300}
        gears={6}
        image={
          "https://images5.1000ps.net/images_bikekat/2025/6-Kawasaki/8759-Ninja_650/007-638596564900053595-kawasaki-ninja-650.jpg"
        }
      />
      <Motorcycle
        brand={"Honda CBR 650R"}
        price={9600}
        gears={6}
        image={
          "https://cdn.motochecker.at/motorrad/honda-cbr-650-r-0.jpg"
        }
      />
      <Motorcycle
        brand={"BMW G 310 R"}
        price={5800}
        gears={6}
        image={
          "https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_726/v1/Autodatenbank/Motorrad/bmw-g-310r-2024.jpeg"
        }
      />
      <Motorcycle
        brand={"Ducati Monster"}
        price={11500}
        gears={6}
        image={"https://images5.1000ps.net/g-000319-g_W3192358-ducati-monster-e5-aktionspreis-639055878688199380.jpg"}
      />
    </div>
  );
}
