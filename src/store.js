import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// Persistance storage setup for redux
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['isloading']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Add Browser extension support code
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose


// Add Thunk
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

export default () => {
    let store = createStore(
        persistedReducer,
        enhancer
    );

    let persistor = persistStore(store);

    return {
        store,
        persistor
    }
}
