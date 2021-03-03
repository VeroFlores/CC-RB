import React from 'react';
import { Link as LinkRouter } from '@reach/router';

const Navbar = () => {
  console.log('estamos en la ruta navbar');
  return (
    <>
      <h1>Nabvar</h1>
      <button type="button">All</button>
      <h3>Templates</h3>
      <nav>
        <LinkRouter to="/list">LIST</LinkRouter>
      </nav>

    </>

  );
};
export default Navbar;
