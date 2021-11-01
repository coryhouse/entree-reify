import { Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Admin } from "./Admin";
import { ErrorBoundary } from "react-error-boundary";

export function App() {
  // Exercise 1: Create nav bar that displays
  // on all pages.
  return (
    <>
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
        <Home />
      </Route>

      <Route path="/admin">
        <ErrorBoundary fallback={<>Sorry, an error occurred. 🤦‍♂️</>}>
          <Admin />
        </ErrorBoundary>
      </Route>

      <Route path="/about">
        <About />
      </Route>
    </>
  );
}
