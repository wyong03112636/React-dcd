import { createStore,applyMiddleware } from 'redux'
import Immutbale from 'immutable'
import createSagaMiddleware from 'redux-saga'
import sagas from './saga'

import reducers from './reducers.js'
const rootState = Immutbale.Map()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, rootState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas)
export default store;