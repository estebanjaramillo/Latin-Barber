import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Home from "../Home";
import Mision from "../Mision";
//import dataPricing from "../dataPricing";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Mision" component={Mision} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
