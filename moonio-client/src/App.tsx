import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Promotions from "./pages/Promotions";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Promotions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
