import { useEffect, useState, type JSX } from "react";
import type User from "../UsersPage/types/User";
import { Link, useParams } from "react-router-dom";

export default function UserPage(): JSX.Element {
  const { userId } = useParams();
  const initialValue: User = {
    id: 0,
    email: "",
    username: "",
    password: "",
    name: {
      firstname: "",
      lastname: "",
    },
    address: {
      city: "",
      street: "",
      number: 0,
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
    phone: "",
  };

  const [user, setUser] = useState<User>(initialValue);

  useEffect(() => {
    async function loadUser(): Promise<void> {
      const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
      const obj = await response.json();
      setUser(obj);
    }
    loadUser();
  }, [userId]);

  return (
    <div
      style={{ border: "2px solid black", padding: "10px", margin: "10px" }}
      key={user.id}
    >
      <div>Ник: {user.username}</div>
      <div>
        {" "}
        Имя, Фамилия: {user.name.firstname} {user.name.lastname}
      </div>
      <div>Телефон: {user.phone}</div>
      <div>Почта: {user.email}</div>
      <div>Zip-code: {user.address.zipcode}</div>
      <Link to="../userspage">Назад к списку пользователей</Link>
    </div>
  );
}
