import styles from "./Home.module.scss";
import { MenuItem } from "./types";

type HomeProps = {
  menu: MenuItem[];
};

export function Home({ menu }: HomeProps) {
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
