import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Home";
import EjerciciosNA from "../EjerciciosNA";
import EjerciciosNP from "../EjerciciosNP";
import EjerciciosNL from "../EjerciciosNL";
import dataPricing from "../dataPricing";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/datapricing" component={dataPricing} />
          <Route exact path="/" component={Home} />

          <Route exact path="/EjerciciosNA" component={EjerciciosNA} />
          <Route exact path="/EjerciciosNP" component={EjerciciosNP} />
          <Route exact path="/EjerciciosNL" component={EjerciciosNL} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
