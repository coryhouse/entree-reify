import { useQuery } from "react-query";
import { getMenu } from "./api/menuApi";
import styles from "./Home.module.scss";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export function Home() {
  const menuQuery = useQuery<MenuItem[]>("menu", getMenu);

  // if (menu.length === 0) return <p>Loading...</p>;

  return (
    <>
      <h1>Menu</h1>

      {/* Derived state */}
      {/** Exercise 2: Show a loading message until data is available */}
      {menuQuery.isLoading ? (
        "Loading..."
      ) : (
        <p>{menuQuery.data?.length} Items found.</p>
      )}

      {menuQuery.data?.map((menuItem) => (
        <div className={styles.card} key={menuItem.id}>
          <h2>{menuItem.name}</h2> {menuItem.description}{" "}
          <p>{menuItem.price}</p>
        </div>
      ))}
    </>
  );
}
