import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SignUp from './containers/Auth/SignUp/SignUp';
import Login from './containers/Auth/Login/Login';
import Layout from './hoc/layout/Layout';

const App: React.FC = ({ loggedIn, emailVerified }: any) => {
  let routes;

  if (loggedIn) {
    routes = <p>You are logged in</p>;
  } else if (!loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }: any) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(App);
