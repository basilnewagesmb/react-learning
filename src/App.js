import React, { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
function Layout() {
  let searchParams = useLocation();
  console.log(
    "🚀 ~ file: App.js ~ line 12 ~ Layout ~ searchParams",
    searchParams
  );

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
        </ul>
      </nav>
      <p>outlet below
        
      </p>
      <Outlet />
    </div>
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>

      <h3>Featured Teams</h3>
      <ul>
        <li>
          <Link to="/teams/1">Teams 1</Link>
        </li>
        <li>
          <Link to="/teams/2">Teams 2</Link>
        </li>
      </ul>
    </div>
  );
}
const Team = () => {
  return <p>Team</p>;
};
const Teams = () => {
  return <p>Teams</p>;
};

const NewTeamForm = () => {
  return (
    <form action="">
      <input type="text" name="" id="" />
      <input type="submit" value="Submit" />
    </form>
  );
};
const LeagueStandings = () => {
  return <p>LeagueStandings</p>;
};
const Apple = () => {
  return <p>Apple</p>;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />} />
            <Route path="/teams/:teamId" element={<Team />} />
            <Route path="/teams/new" element={<NewTeamForm />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
