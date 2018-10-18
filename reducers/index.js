import {combineReducers} from 'redux';
import counterReducers from './counterReducer';
const allReducer = combineReducers({
    counterReducers,
})

export default allReducer;