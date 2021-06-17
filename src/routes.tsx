import { BrowserRouter, Route } from "react-router-dom";

// pages
import IndexPage from "./pages/IndexPage";
import SigninPage from "./pages/SigninPage";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SigninPage} />
      <Route path="/users" component={IndexPage} />
    </BrowserRouter>
  );
}

export default Routes;
