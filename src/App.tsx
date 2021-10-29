import { Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Admin } from "./Admin";

export function App() {
  // Exercise 1: Create nav bar that displays
  // on all pages.
  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/admin">
        <Admin />
      </Route>

      <Route path="/about">
        <About />
      </Route>
    </>
  );
}
