/*
 * Npm import
 */
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
/*
 * Local import
 */
import Show from 'src/containers/User/show';
import ListUsers from 'src/containers/User';
import NoMatch from 'src/components/NoMatch';
/*
 * Code
 */

const App = () => (
  <div id="app" className="container">
    <h1>Welcome App</h1>
    <Link to="/" href="/" title="Home Page">Home</Link>
    <section>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            <Link to="/users" href="/users" title="Show Data Sample List">Data Sample List</Link>
          }
        />
        <Route exact path="/users" component={ListUsers} />
        <Route exact path="/users/:userId" component={Show} />
        <Route component={NoMatch} />
      </Switch>
    </section>
  </div>
);


/*
 * Export Default
 */
export default App;
