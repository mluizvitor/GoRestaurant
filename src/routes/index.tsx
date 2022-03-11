import { Switch, Route } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  );
}

export default Routes;
