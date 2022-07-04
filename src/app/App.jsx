import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Main from './layouts/Main';
import Login from './layouts/Login';
import DataInit from './layouts/DataInit';
import Sneakers from './layouts/Sneakers';

import { Footer, Header } from './components/ui';
import AuthProvider from './hooks/useAuth';
import LogOut from './layouts/LogOut';
import { useDispatch } from 'react-redux';
import { loadMaterialsList } from './store/materials';
import { loadBrandsList } from './store/brands';
import { loadSneakersList } from './store/sneakers';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMaterialsList());
    dispatch(loadBrandsList());
    dispatch(loadSneakersList());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
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
    </div>
  );
}

export default App;
