import React from "react";
import { Link, Outlet } from "react-router-dom";

function DashBoardMain() {
  return (
    <section>
      <h1>dashboard main</h1>
      <aside>
        <ul>
          <li>
            <Link to={"/dashboard/inbox"}>inbox</Link>
          </li>
          <li>
            <Link to={"/dashboard/settings-and-privacy"}>settings</Link>
          </li>
          <li>
            <Link to="">settings</Link>
          </li>
          <li>
            <Link to="">settings</Link>
          </li>
          <li>
            <Link to="">settings</Link>
          </li>
        </ul>
      </aside>
      <Outlet />
    </section>
  );
}

export default DashBoardMain;
