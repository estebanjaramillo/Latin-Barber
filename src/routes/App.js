import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../Home";
import Mision from "../Mision";
import Registro from "../Registro";
import Quienessomos from "../Quienessomos";
import Recomendaciones from "../Recomendaciones";
import Catalogo from "../Catalogo";
import Login from "../Login";
import Barberos from "../Barberos";

//import dataPsricing from "../dataPricing";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Catalogo" component={Catalogo} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Registro" component={Registro} />
          <Route exact path="/Recomendaciones" component={Recomendaciones} />
          <Route exact path="/Mision" component={Mision} />
          <Route exact path="/Quienessomos" component={Quienessomos} />
          <Route exact path="/Barberos" component={Barberos} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
