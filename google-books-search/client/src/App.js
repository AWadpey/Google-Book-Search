import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Nomatch from "./pages/NoMatch";
import Saved from "./pages/Saved";
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={Nomatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
