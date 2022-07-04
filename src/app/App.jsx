import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Main from './layouts/Main';
import Login from './layouts/Login';
import DataInit from './layouts/DataInit';
import Sneakers from './layouts/Sneakers';

import { Footer, Header } from './components/ui';
import AuthProvider from './hooks/useAuth';
import LogOut from './layouts/LogOut';
import AppLoader from './components/ui/hoc/AppLoader';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppLoader>
        <AuthProvider>
          <Header />
          <div className="flex-grow">
            <Switch>
              <Route path="/sneakers/:sneakersId?" component={Sneakers} />
              <Route path="/login/:type?" component={Login} />
              <Route path="/init" component={DataInit} />
              <Route path="/logout" component={LogOut} />
              <Route path="/" component={Main} />
              <Redirect to="/" />
            </Switch>
          </div>
          <Footer />
        </AuthProvider>
      </AppLoader>
    </div>
  );
}

export default App;
