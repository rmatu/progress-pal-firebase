import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import SignUp from './containers/Auth/SignUp/SignUp';
import Login from './containers/Auth/Login/Login';
import Home from './containers/Home/Home';
import Layout from './hoc/layout/Layout';
import VerifyEmail from './containers/Auth/VerifyEmail/VerifyEmail';

const App: React.FC = ({ loggedIn, emailVerified }: any) => {
  let routes;
  const authorized = loggedIn && emailVerified;

  if (loggedIn && !emailVerified) {
    routes = <VerifyEmail />;
  } else if (loggedIn && emailVerified) {
    routes = <Home />;
  } else if (!loggedIn && !emailVerified) {
    routes = (
      <AnimatePresence>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/login" />
        </Switch>
      </AnimatePresence>
    );
  }

  return <Layout authorized={authorized}>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }: any) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(App);
