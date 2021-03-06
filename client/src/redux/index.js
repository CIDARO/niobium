import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger();

export default function configureStore(state) {
    return createStore(
        rootReducer,
        state,
        applyMiddleware(logger)
    )
}