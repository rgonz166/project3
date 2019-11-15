import React from 'react';
import { render } from 'react-dom';
import { Auth0Provider } from "./react-auth0-spa";
import history from "./App/utils/history";
import './index.css';
import App from './App/App';

const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

render(
    <Auth0Provider
        domain={'yellow-field-2990.auth0.com'}
        client_id={'jt12lohjTyFzoQLSHb64m0gojCUmaTmk'}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
        <App />
    </Auth0Provider>,
    document.getElementById('root')
);
