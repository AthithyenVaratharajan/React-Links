import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";

function App() {
  const handleClick = () => {
    console.log("Clicked!!!");
  };
  return (
    <div className="main">
      <h1>App Component</h1>

      <nav className="comp nav">
        <ul>
          <li>
            <NavLink
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="purple"
              exact
              to="/"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="purple"
              exact
              to="/stocks"
              onClick={handleClick}
            >
              Stocks
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{ fontWeight: "bold" }}
              activeClassName="purple"
              exact
              to="/movies"
              onClick={handleClick}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/not-logged-in">
          <h1> You Must Be Logged In To Enter.</h1>
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
