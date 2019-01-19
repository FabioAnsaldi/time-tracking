'use strict';

import {createStore, applyMiddleware} from 'redux';
import combiner from './index';
import {createLogger} from 'redux-logger';

const logger = createLogger({

    predicate: (getState, action) => {

        return process.env.NODE_ENV !== 'production';
    }
});

const initializeStore = () => {

    const store = createStore(combiner(), applyMiddleware(logger));

    store.asyncReducers = {};
    store.injectReducer = (key, reducer) => {
console.log(key, reducer);
        store.asyncReducers[key] = reducer;
        store.replaceReducer(combiner(store.asyncReducers));
        return store;
    };
    return store;
};

if (module.hot) {
    // Enable Webpack hot module replacement for combiner
    module.hot.accept('../combiner', () => {

        const nextReducer = combiner();
        initializeStore().replaceReducer(nextReducer);
    });
}

export default initializeStore;