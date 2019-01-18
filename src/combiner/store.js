'use strict';

import {createStore, applyMiddleware} from 'redux';
import combiner from './index';
import {createLogger} from 'redux-logger';

const logger = createLogger({

    predicate: (getState, action) => {

        return process.env.NODE_ENV !== 'production';
    }
});
const store = createStore(combiner(), applyMiddleware(logger));

if (module.hot) {
    // Enable Webpack hot module replacement for combiner
    module.hot.accept('../combiner', () => {

        const nextReducer = combiner();
        store.replaceReducer(nextReducer);
    });
}

export default store;