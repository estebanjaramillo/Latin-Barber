import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Home";
import Mision from "../Mision";
import quiensomos from "../quiensomos";
//import dataPricing from "../dataPricing";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Mision" component={Mision} />
          <Route exact path="/quiensomos" component={quiensomos} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
