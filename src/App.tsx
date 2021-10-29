import React, { useState } from "react";
import { Input } from "./Input";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";

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

export function App() {
  const [newMenuItem, setNewMenuItem] = useState(initialNewMenuItem);

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    // Using spread syntax here because React state should be treated as immutable.
    setNewMenuItem({ ...newMenuItem, [event.target.id]: event.target.value });
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
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <h1>Entree</h1>
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
