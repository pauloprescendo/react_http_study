import { BrowserRouter, Switch, Route } from "react-router-dom";

import Users from "./pages/Users";
import Signin from "./pages/Signin";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Signin} exact />
      <Route path="/users" component={Users} />
    </BrowserRouter>
  );
}

export default Routes;
