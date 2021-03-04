import React from 'react';
import { Router } from '@reach/router';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar/index';
import TableItems from './components/Items/index';
import { Title } from './styles/AppStyles';

const App = () => (
  <div>
    <GlobalStyle />
    <Title>Select Builder Schedule-2019 FallCohort</Title>
    <Navbar />
    <Router>
      <TableItems path="/list" />
    </Router>
  </div>

);

export default App;
