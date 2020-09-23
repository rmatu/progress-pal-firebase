import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import * as ROUTES from './constants/routes';

import SignUp from './containers/Auth/SignUp/SignUp';
import Login from './containers/Auth/Login/Login';
import Home from './containers/Home/Home';
import Layout from './hoc/layout/Layout';
import VerifyEmail from './containers/Auth/VerifyEmail/VerifyEmail';
import Exercises from './containers/Exercises/Exercises';
import Account from './containers/Account/Account';

const App: React.FC = ({ loggedIn, emailVerified }: any) => {
  let routes;
  const authorized = loggedIn && emailVerified;

  if (loggedIn && !emailVerified) {
    routes = <VerifyEmail />;
  } else if (loggedIn && emailVerified) {
    routes = (
      <AnimatePresence>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.EXERCISES} component={Exercises} />
          <Route exact path={ROUTES.ACCOUNT} component={Account} />
          <Redirect to={ROUTES.HOME} />
        </Switch>
      </AnimatePresence>
    );
  } else if (!loggedIn && !emailVerified) {
    routes = (
      <AnimatePresence>
        <Switch>
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Redirect to={ROUTES.LOGIN} />
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
