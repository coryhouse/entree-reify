import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Admin } from "./Admin";
import { ErrorBoundary } from "react-error-boundary";
import { getMenu } from "./api/menuApi";
import { MenuItem } from "./types";
import { useWindowWidth } from "./hooks/useWindowWidth";

export function App() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    async function fetchMenu() {
      const _menu = await getMenu();
      setMenu(_menu);
    }
    fetchMenu();
  }, []); // Dependency array. So empty array means no deps. So only runs once.

  // Exercise 1: Create nav bar that displays
  // on all pages.
  return (
    <>
      Window width: {windowWidth}
      <nav aria-label="Main">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact>
        <Home menu={menu} />
      </Route>
      <Route path="/admin">
        <ErrorBoundary fallback={<>Sorry, an error occurred. 🤦‍♂️</>}>
          <Admin menu={menu} />
        </ErrorBoundary>
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </>
  );
}
