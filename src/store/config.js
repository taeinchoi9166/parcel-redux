import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import * as modules from './modules';

const reducers = combineReducers(modules);
const middlewares = [];

const isDev = process.env.NODE_ENV === 'devlopment'; //개발 모드인지 확인
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; //개발모드이면 리덕스 개발 툴 활성화
const composeEnhancers = devtools || compose;

const config = (preloadedState) => createStore(reducers, preloadedState, composeEnhancers( //스토어를 리듀서, 미리 불러온 state, 미듈웨어들을 적용시켜 생성
    applyMiddleware(...middlewares)
));

export default config;