import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from 'redux-thunk';

const storeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhacers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;