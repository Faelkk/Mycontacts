import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Create from "../pages/Create/Create";
import Edit from "../pages/EditContact/Edit";

const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" component={Create} />
      <Route path="/edit/:id" component={Edit} />
    </Switch>
  );
};

export default routes;
