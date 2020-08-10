import React, { FC } from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';

import ExplorerPage from '../pages/explorer';
import BlockPage from '../pages/block';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/explorer'}>
          <ExplorerPage/>
        </Route>
        <Route path={'/block'}>
          <BlockPage/>
        </Route>
        <Redirect from={'/'} to={'/explorer'}/>
      </Switch>
    </Router>
  );
}

export default App;
