import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Main from './layouts/Main';
import Login from './layouts/Login';
import DataInit from './layouts/DataInit';
import Sneakers from './layouts/Sneakers';

import { Footer, Header } from './components/ui';
import { BrandProvider } from './hooks/useBrand';
import { MaterialProvider } from './hooks/useMaterials';
import { SneakersProvider } from './hooks/useSneakers';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <SneakersProvider>
        <Header />
        <div className="flex-grow">
          <MaterialProvider>
            <BrandProvider>
              <Switch>
                <Route path="/sneakers/:sneakersId?" component={Sneakers} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/init" component={DataInit} />
                <Route path="/" component={Main} />
                <Redirect to="/" />
              </Switch>
            </BrandProvider>
          </MaterialProvider>
        </div>
        <Footer />
      </SneakersProvider>
    </div>
  );
}

export default App;
