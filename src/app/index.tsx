import React, { FC } from 'react';

import {
  BrowserRouter as Router,
  Switch, Route, Link, Redirect,
} from 'react-router-dom';

import Navbar from '../components/navbar';

import ExplorerPage from '../pages/explorer';

const App: FC = () => {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path={'/explorer'}>
          <ExplorerPage />
        </Route>
        <Redirect from={'/'} to={'/explorer'} />
      </Switch>
    </Router>
  );
}

export default App;
