import { Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Admin } from "./Admin";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
