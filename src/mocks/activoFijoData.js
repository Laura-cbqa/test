import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

const store = createStore(
    rootReducer,
    process.env.REACT_APP_ENV !== 'production'
        ? composeWithDevTools(applyMiddleware(thunk))
        : applyMiddleware(thunk)
);

export default store;
