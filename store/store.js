import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];
let store;
const isClient = typeof window !== 'undefined';

if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
        key: 'root',
        storage
    };

    store = createStore(
        persistReducer(persistConfig, rootReducer),
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );

    store.__PERSISTOR = persistStore(store);
} else {
    store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}


export default store;
