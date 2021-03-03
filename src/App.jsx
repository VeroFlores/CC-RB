import React from 'react';
import { Router } from '@reach/router';
import GlobalStyle from './styles/GlobalStyles';
import Navbar from './components/Navbar/index';
import List from './components/Items/index';

const App = () => {
  console.log('holaa');
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Router>
        <List path="/list" />
      </Router>
    </div>

  );
};

export default App;
