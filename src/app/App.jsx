import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Main from './layouts/Main';
import Login from './layouts/Login';
import DataInit from './layouts/DataInit';
import Sneakers from './layouts/Sneakers';

import { Footer, Header } from './components/ui';
import { BrandProvider } from './hooks/useBrand';
import { SneakersProvider } from './hooks/useSneakers';
import AuthProvider from './hooks/useAuth';
import LogOut from './layouts/LogOut';
import { useDispatch } from 'react-redux';
import { loadMaterialsList } from './store/materials';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMaterialsList());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <AuthProvider>
        <SneakersProvider>
          <Header />
          <div className="flex-grow">
            <BrandProvider>
              <Switch>
                <Route path="/sneakers/:sneakersId?" component={Sneakers} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/init" component={DataInit} />
                <Route path="/logout" component={LogOut} />
                <Route path="/" component={Main} />
                <Redirect to="/" />
              </Switch>
            </BrandProvider>
          </div>
          <Footer />
        </SneakersProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
