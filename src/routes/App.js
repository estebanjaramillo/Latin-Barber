import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Home";
//import dataPricing from "../dataPricing";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
