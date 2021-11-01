import React, { useState } from "react";
import { addMenuItem } from "./api/menuApi";
import { Input } from "./shared/Input";
import { NewMenuItem } from "./types";
import { useHistory } from "react-router-dom";

const initialNewMenuItem: NewMenuItem = {
  name: "",
  description: "",
  price: null,
};

type Error = {
  name: string;
  description: string;
  price: string;
};

type Status = "Idle" | "Saving" | "Submitted";

export function Admin() {
  const history = useHistory();
  const [status, setStatus] = useState<Status>("Idle");
  const [newMenuItem, setNewMenuItem] = useState(initialNewMenuItem);

  // Derived state - Calculated on each render
  const errors = validate();
  const valid = Object.values(errors).every((v) => !v);

  function validate(): Error {
    const error: Error = {
      name: "",
      description: "",
      price: "",
    };
    if (!newMenuItem.name) error.name = "Name is required.";
    return error;
  }

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    // Using spread syntax here because React state should be treated as immutable.
    setNewMenuItem({
      ...newMenuItem,
      [event.target.id]: event.target.value,
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Don't post back.
    setStatus("Submitted");
    if (!valid) return;
    setStatus("Saving");
    await addMenuItem(newMenuItem);
    // Redirect to home
    history.push("/");
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
          error={status !== "Idle" && errors.name ? errors.name : ""}
        />
        <Input
          id="description"
          label="Description"
          type="textarea"
          value={newMenuItem.description}
          onChange={onChange}
          error={errors.description}
        />
        <Input
          id="price"
          label="Price"
          type="number"
          value={newMenuItem.price?.toString() ?? ""}
          onChange={onChange}
          error={errors.price}
        />
        <input
          type="submit"
          value="Save Menu Item"
          disabled={status === "Saving"}
        />
      </form>
    </>
  );
}
