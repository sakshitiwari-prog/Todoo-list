import { createStore ,compose,applyMiddleware} from 'redux'
import {rootReducer} from './Reducers/index'
import createSagaMiddleware from 'redux-saga'
// import rootsaga from './sagas/index';
import rootsaga from './Sagas'
const sagaMiddleware=createSagaMiddleware()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,composeEnhancer(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootsaga)
export default store