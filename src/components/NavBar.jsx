import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return <nav>
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/posts">posts</Link></li>
      <li><Link to="/dashboard">dashboard</Link></li>
      <li><Link to="/">home</Link></li>
      <li><Link to="/">home</Link></li>
      <li><Link to="/">home</Link></li>
    </ul>
  </nav>;
}

export default NavBar;
