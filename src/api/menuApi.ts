export async function getMenu() {
  const resp = await fetch("http://localhost:3001/menu");
  if (!resp.ok) throw resp;
  const menu = await resp.json();
  return menu;
}
