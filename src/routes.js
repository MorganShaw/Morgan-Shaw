import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from './Components/Contact';

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path='/work' component={Work} />
    <Route path='/contact' component={Contact} />
  </Switch>
);
