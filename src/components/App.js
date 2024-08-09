import React from 'react'
import Theme from "./Theme"
import Header from "./Header"
import Menu from './Menu';

function App () {
  const products = [
  { title: "Pizza", description: "xxxxxxxxx", price: "59.00", currency: "SEK", img:'../public/img/pizza.png',id:1 },
  { title: "Pizza", description: "xxxxxxxxx", price: "59.00", currency: "SEK",img:"./foto2", id:2},
  { title: "Pizza", description: "xxxxxxxxx", price: "59.00", currency: "SEK",img:"./foto3", id:3},
  { title: "Pizza", description: "xxxxxxxxx", price: "59.00", currency: "SEK",img:"./foto1",id:4},
];
  return (
    <>
      <Header />
      <Menu prod={products}/>
  
      
    </>
  );
}


export default App