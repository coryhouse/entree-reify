import React from "react";

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
      {/* Example comment */}
      <h1 style={{ color: brandColor, paddingBottom: "10px" }}>Entree</h1>
      <ul>
        {menu.map((menuItem) => (
          <li key={menuItem.id}>{menuItem.name}</li>
        ))}
      </ul>
    </>
  );
}
