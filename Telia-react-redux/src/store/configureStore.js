import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';

export default function configureStore(initialState) {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const loggerMiddleware = createLogger();

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, loggerMiddleware))
    );
}
