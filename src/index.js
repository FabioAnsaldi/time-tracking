'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import store from "./combiner/store";
import Application from './components/application/index.jsx';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Application/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);

if (module.hot) module.hot.accept();