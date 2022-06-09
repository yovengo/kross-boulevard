import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/ui/Header';
import Main from './layouts/Main';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
