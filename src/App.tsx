import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SignUp from './containers/Auth/SignUp';

import Layout from './hoc/layout/Layout';
const App: React.FC = ({ loggedIn, emailVerified }: any) => {
  let routes;

  if (!loggedIn && !emailVerified) {
    routes = <SignUp />;
  }

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }: any) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(App);
