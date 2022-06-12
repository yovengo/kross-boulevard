import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Main from './layouts/Main';
import DataInit from './layouts/DataInit';
import Sneakers from './layouts/Sneakers';

import { Header } from './components/ui';
import { BrandProvider } from './hooks/useBrand';
import { MaterialProvider } from './hooks/useMaterials';

function App() {
  return (
    <div>
      <Header />
      <MaterialProvider>
        <BrandProvider>
          <Switch>
            <Route path="/sneakers/:sneakersId?" component={Sneakers} />
            <Route path="/init" component={DataInit} />
            <Route path="/" component={Main} />
            <Redirect to="/" />
          </Switch>
        </BrandProvider>
      </MaterialProvider>
    </div>
  );
}

export default App;
