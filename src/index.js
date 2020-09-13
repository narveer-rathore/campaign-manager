import React from 'react';
import ReactDOM from 'react-dom';

import { I18nextProvider } from "react-i18next";
import { Provider } from 'react-redux'

import i18n from "./i18n";

import { PersistGate } from 'redux-persist/integration/react'

import './styles/index.scss';
import App from './containers/manage-events';

import Loader from './components/Loader';

import * as serviceWorker from './serviceWorker';

import { default as configureStore } from './store';

const { store, persistor } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
