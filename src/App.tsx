import React, { useState } from "react";
import styles from "./App.module.scss";
import { Input } from "./Input";

const brandColor = "blue";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type NewMenuItem = {
  name: string;
  description: string;
  price: number | null;
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

const initialNewMenuItem: NewMenuItem = {
  name: "",
  description: "",
  price: null,
};

export function App() {
  const [newMenuItem, setNewMenuItem] = useState(initialNewMenuItem);

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newMenuItemCopy = { ...newMenuItem }; // Copying state via spread syntax. Note: Shallow copy
    newMenuItemCopy.name = event.target.value;
    setNewMenuItem(newMenuItemCopy);
  }

  return (
    <>
      <h1>Entree</h1>
      <form>
        <Input
          id="name"
          label="Name"
          value={newMenuItem.name}
          onChange={onChange}
        />
        <Input
          id="description"
          label="Description"
          type="textarea"
          value={newMenuItem.description}
          onChange={onChange}
        />
        <Input
          id="price"
          label="Price"
          type="number"
          value={newMenuItem.price?.toString() ?? ""}
          onChange={onChange}
        />
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
