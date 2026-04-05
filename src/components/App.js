import React, { useState } from "react";
import Menu from "./menu";

const allItems = [
  { id: 1, name: "Pancakes", category: "breakfast", price: 5.99, img: "https://via.placeholder.com/150" },
  { id: 2, name: "Omelette", category: "breakfast", price: 4.99, img: "https://via.placeholder.com/150" },
  { id: 3, name: "Waffles", category: "breakfast", price: 6.99, img: "https://via.placeholder.com/150" },
  { id: 4, name: "Burger", category: "lunch", price: 8.99, img: "https://via.placeholder.com/150" },
  { id: 5, name: "Pizza", category: "lunch", price: 10.99, img: "https://via.placeholder.com/150" },
  { id: 6, name: "Pasta", category: "lunch", price: 9.99, img: "https://via.placeholder.com/150" },
  { id: 7, name: "Mango Shake", category: "shakes", price: 3.99, img: "https://via.placeholder.com/150" },
  { id: 8, name: "Strawberry Shake", category: "shakes", price: 4.49, img: "https://via.placeholder.com/150" },
  { id: 9, name: "Chocolate Shake", category: "shakes", price: 4.99, img: "https://via.placeholder.com/150" },
];

const App = () => {
  const [menuItems, setMenuItems] = useState(allItems);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(allItems);
    } else {
      setMenuItems(allItems.filter((item) => item.category === category));
    }
  };

  return (
    <div id="main">
      <Menu menuItems={menuItems} filterItems={filterItems} />
    </div>
  );
};

export default App;