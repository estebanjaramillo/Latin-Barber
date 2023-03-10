import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Home";
import Mision from "../Mision";
import quienessomos from "../quienessomos";
import Recomendaciones from "../Recomendaciones";
//import dataPsricing from "../dataPricing";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Mision" component={Mision} />
          <Route exact path="/quienessomos" component={quienessomos} />
          <Route exact path="/Recomendaciones" component={Recomendaciones} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
