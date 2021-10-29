import { NewMenuItem } from "../types";

export async function getMenu() {
  const resp = await fetch("http://localhost:3001/menu");
  if (!resp.ok) throw resp;
  const menu = await resp.json();
  return menu;
}

export async function addMenuItem(newMenuItem: NewMenuItem) {
  const resp = await fetch("http://localhost:3001/menu", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newMenuItem),
  });
  if (!resp.ok) throw resp;
  const menuItem = await resp.json();
  return menuItem;
}
