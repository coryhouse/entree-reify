import React from "react";
import styles from "./App.module.scss";
import { Input } from "./Input";

const brandColor = "blue";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const menu: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Tikka Masala",
    description: "Rich curry Chicken. You'll LOVE it!",
    price: 17,
  },
  {
    id: 2,
    name: "BBQ Ribs",
    description: "Meaty and tender",
    price: 24,
  },
];

export function App() {
  return (
    <>
      <h1>Entree</h1>
      {/* Exercise 2: Use Input for all form fields */}
      <form>
        <Input id="name" label="Name" />
        <div>
          <label htmlFor="description">Description</label>
          <br />
          <textarea id="description" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <br />
          <input type="number" id="price" />
        </div>
        <input type="submit" value="Save Menu Item" />
      </form>

      {menu.map((menuItem) => (
        <div className={styles.card} key={menuItem.id}>
          <h2>{menuItem.name}</h2> {menuItem.description}{" "}
          <p>{menuItem.price}</p>
        </div>
      ))}
    </>
  );
}
