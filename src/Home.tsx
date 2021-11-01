import { useEffect, useState } from "react";
import { getMenu } from "./api/menuApi";
import styles from "./Home.module.scss";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export function Home() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    async function fetchMenu() {
      const _menu = await getMenu();
      setMenu(_menu);
    }
    fetchMenu();
  }, []); // Dependency array. So empty array means no deps. So only runs once.

  // if (menu.length === 0) return <p>Loading...</p>;

  return (
    <>
      <h1>Menu</h1>

      {/* Derived state */}
      {/** Exercise 2: Show a loading message until data is available */}
      {menu.length === 0 ? "Loading..." : <p>{menu.length} Items found.</p>}

      {menu.map((menuItem) => (
        <div className={styles.card} key={menuItem.id}>
          <h2>{menuItem.name}</h2> {menuItem.description}{" "}
          <p>{menuItem.price}</p>
        </div>
      ))}
    </>
  );
}
