import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import registerServiceWorker from './registerServiceWorker'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import reducers from './reducers'
import '../node_modules/bulma/css/bulma.css'
import '../node_modules/bulma-extensions/bulma-checkradio/dist/css/bulma-checkradio.min.css'
import './style.css'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(persistedReducer,{},  composeEnhancers(applyMiddleware(reduxThunk)))
let persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  , document.getElementById('root'))
registerServiceWorker()
