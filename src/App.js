import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';

import Episode from './routes/Episode';
import Home from './routes/Home';
import Show from './routes/Show';

const App = () => (
  <BrowserRouter>
    <Navigation />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:show/" component={Show} />
      <Route exact path="/:show/:episode/" component={Episode} />
    </Switch>
  </BrowserRouter>
);

export default App;
