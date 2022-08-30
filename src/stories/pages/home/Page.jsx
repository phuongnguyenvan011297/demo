import { Container } from '../../templates/container/Container';
import React from "react";


import { Header } from "../../templates/header/Header";
import "./page.css";

const ProductList = [
  {
    id: 1,
    img: "http://placekitten.com/200/200",
    info: "Meo Anh",
    price: "3000$",
  },
  {
    id: 2,
    img: "https://placekitten.com/g/200/200",
    info: "Meo Tay Ban Nha",
    price: "2000$",
  },
  {
    id: 3,
    img: "http://placekitten.com/200/200",
    info: "Meo Viet Nam",
    price: "10000$",
  },
  {
    id: 4,
    img: "https://placekitten.com/g/200/200",
    info: "Meo Trung Quoc",
    price: "1000$",
  },
  {
    id: 5,
    img: "http://placekitten.com/200/200",
    info: "Meo Tam the",
    price: "1000$",
  },
  {
    id: 6,
    img: "https://placekitten.com/g/200/200",
    info: "Meo ",
    price: "1000$",
  },
];

export const Page = ({ onLogin }) => {
  const [user, setUser] = React.useState();
  

  return (
    <article>
      <Header
        user={user}
        onLogin={onLogin}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />
      <Container productList = {ProductList} />
      
    </article>
  );
};
