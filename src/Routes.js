import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Search, UserDetails } from './pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path="/search" component={Search} />
        <Route exact path="/users/:username" component={UserDetails} />
      </Switch>
    </Router>
  );
};

export default Routes;
