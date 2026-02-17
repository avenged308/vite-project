import { useEffect, useState, type JSX } from "react";
import type User from "./types/User";
import { Link } from "react-router-dom";

export default function UsersPage(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  async function loadUsers(): Promise<void> {
    const response = await fetch("https://fakestoreapi.com/users");
    const arr = await response.json();
    setUsers(arr);
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            style={{ border: "solid black 2px", margin: "10px" }}
            key={user.id}
          >
            <div>Ник:{user.username}</div>
            <div>
              Имя,Фамилия: {user.name.firstname} {user.name.lastname}
            </div>
            <div>Телефон: {user.phone}</div>
            <div>Email: {user.email}</div>
            <div>Zip-code: {user.address.zipcode}</div>
            <Link to={String(user.id)}>Подробнее о пользователе</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
