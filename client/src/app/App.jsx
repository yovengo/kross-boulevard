import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Footer, Header } from './components/ui';
import { Cart, DataInit, Login, LogOut, Main, Sneakers } from './layouts';

import AppLoader from './components/ui/hoc/AppLoader';
import ProtectedRoute from './components/ui/hoc/ProtectedRoute';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppLoader>
        <Header />
        <div className="flex-grow">
          <Switch>
            <Route path="/sneakers/:sneakersId?" component={Sneakers} />
            <Route path="/login/:type?" component={Login} />
            <ProtectedRoute path="/cart" component={Cart} />
            <ProtectedRoute path="/init" component={DataInit} />
            <Route path="/logout" component={LogOut} />
            <Route path="/" component={Main} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
      </AppLoader>
    </div>
  );
}

export default App;
