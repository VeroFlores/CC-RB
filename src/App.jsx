import React from 'react';
import { Router } from '@reach/router';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar/index';
import TableItems from './components/Items/index';

const App = () => (
  <div>
    <GlobalStyle />
    <h3>Select Builder Schedule-2019 FallCohort</h3>
    <Navbar />
    <Router>
      <TableItems path="/list" />
    </Router>
  </div>

);

export default App;
