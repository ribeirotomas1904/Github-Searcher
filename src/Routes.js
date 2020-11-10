import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";

import { Search, UserDetails } from './pages';

const Routes = () => {
  return (
    <Router>
      <ScrollToTop />
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

const ScrollToTop = withRouter(({ location }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
});

export default Routes;
