import React from 'react';
import { Router } from '@reach/router';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar/index';
import TableAll from './components/TableAll/index';
import TableSocialInnovation from './components/TableSocialnnovation/index';
import { Title } from './styles/AppStyles';

const App = () => (
  <div>
    <GlobalStyle />
    <Title>Select Builder Schedule-2019 FallCohort</Title>
    <Navbar />
    <Router>
      <TableAll path="/" />
      <TableSocialInnovation path="/socialInnovation" />
    </Router>
  </div>

);

export default App;
