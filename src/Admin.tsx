import React, { useState } from "react";
import { Input } from "./Input";

type NewMenuItem = {
  name: string;
  description: string;
  price: number | null;
};

const initialNewMenuItem: NewMenuItem = {
  name: "",
  description: "",
  price: null,
};

export function Admin() {
  const [newMenuItem, setNewMenuItem] = useState(initialNewMenuItem);

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    // Using spread syntax here because React state should be treated as immutable.
    setNewMenuItem({
      ...newMenuItem,
      [event.target.id]: event.target.value,
    });
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Exercise 3: Add newMenuItem to menu array.
    // Extra credit: Notify the user that save worked.
    event.preventDefault(); // Don't post back.
    // setMenu([
    //   ...menu,
    //   {
    //     id: menu.length + 1, // HACK LOL
    //     description: newMenuItem.description,
    //     price: newMenuItem.price as number,
    //     name: newMenuItem.name,
    //   },
    // ]);
    setNewMenuItem(initialNewMenuItem); // clear form after save
  }

  return (
    <>
      <h1>Entree Admin</h1>

      <h2>Add Menu Item</h2>
      <form onSubmit={onSubmit}>
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
    </>
  );
}