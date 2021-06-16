import { BrowserRouter, Route } from "react-router-dom";

// pages
import Users from "./pages/Users";
import Signin from "./pages/Signin";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Signin} />
      <Route path="/users" component={Users} />
    </BrowserRouter>
  );
}

export default Routes;
