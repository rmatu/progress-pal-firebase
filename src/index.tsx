import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyles from './theme/global';

import { Provider, useSelector } from 'react-redux';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';

import { rffProps } from './redux/store';
import store from './redux/store';

import Loader from './components/UI/Loader/Loader';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.mainContentBackgorund};
`;

interface AuthProps {
  children: React.ReactNode[] | React.ReactNode;
}

// @ts-ignore
const AuthIsLoaded: React.FC<AuthProps> = ({ children }) => {
  // @ts-ignore
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Wrapper>
            <Loader isWhite />
          </Wrapper>
          <GlobalStyles />
        </React.Fragment>
      </ThemeProvider>
    );

  return children;
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rffProps}>
      <BrowserRouter>
        <AuthIsLoaded>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
          </ThemeProvider>
        </AuthIsLoaded>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
