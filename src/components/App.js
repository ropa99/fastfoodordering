import React from "react";
import Theme from "./Theme";
import Header from "./Header";
import Menu from "./Menu";
//import Order from "./Order"

function App() {
  const products = [
    {
      title: "Pizza",
      description: "xxxxxxxxx",
      price: "59.00",
      currency: "SEK",
      img: "./img/pizza.png",
      id: 1,
    },
    {
      title: "Pizza",
      description: "xxxxxxxxx",
      price: "59.00",
      currency: "SEK",
      img: "./img/pizza.png",
      id: 2,
    },
    {
      title: "Pizza",
      description: "xxxxxxxxx",
      price: "59.00",
      currency: "SEK",
      img: "./img/pizza.png",
      id: 3,
    },
    {
      title: "Pizza",
      description: "xxxxxxxxx",
      price: "59.00",
      currency: "SEK",
      img: "./img/pizza.png",
      id: 4,
    },
    {
      title: "Pizza",
      description: "xxxxxxxxx",
      price: "59.00",
      currency: "SEK",
      img: "./img/pizza.png",
      id: 5,
    },
  ];
  return (
    <>
      <Header />
      <span></span>
      <Menu prod={products} />
      
    </>
  );
}

export default App;
