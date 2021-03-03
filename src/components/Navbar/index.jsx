import React from 'react';
import { Link as LinkRouter } from '@reach/router';

const Navbar = () => (
  <>
    <h1>Nabvar</h1>
    <button type="button">All</button>
    <h3>Templates</h3>
    <nav>
      <LinkRouter to="/list">LIST</LinkRouter>
    </nav>

  </>

);
export default Navbar;
