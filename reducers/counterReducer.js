import { DECREMENT, INCREMENT } from '../actions/actionTypes';

const counterReducers = (times = 0, action) => {
    // debugger;
    switch (action.type) {
        case INCREMENT:
            return times + action.step;
        case DECREMENT:
            return times - action.step;
        default:
            return times; // state does not change
    }
}

export default counterReducers;