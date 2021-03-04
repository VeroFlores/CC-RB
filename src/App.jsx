import React from 'react';
import { Router } from '@reach/router';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar/index';
import TableAll from './pages/TableAll/index';
import TableSocialInnovation from './pages/TableSocialnnovation/index';
import { Title, Container } from './styles/AppStyles';

const App = () => (
  <div>
    <GlobalStyle />
    <Title>Select Builder Schedule-2019 FallCohort</Title>
    <Container>
      <Navbar />
      <Router>
        <TableAll path="/" />
        <TableSocialInnovation path="/socialInnovation" />
      </Router>
    </Container>
  </div>

);

export default App;
