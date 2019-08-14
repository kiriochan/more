import {createStore, combineReducers, compose} from 'redux'
import user from './modules/user'
import picture from './modules/picture'
import discover from './modules/discover'

const reducer = combineReducers({
    user,
    picture,
    discover
});

// 使用redux开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, composeEnhancers());