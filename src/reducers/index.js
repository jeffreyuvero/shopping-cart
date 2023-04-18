import {combineReducers} from 'redux'
import getReducers from './getReducers'


export default combineReducers({
    products: getReducers
})