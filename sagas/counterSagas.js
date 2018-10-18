import { INCREMENT, DECREMENT } from '../actions/actionTypes';
// Saga effects
import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
// takeEvery theo dõi 1 action nào đó
export function* helloWorld () {
    console.log('Hello world !!');
}

export function* watchIncrement(){  
    yield takeEvery(INCREMENT, increment);
}

export function* watchDecrement(){  
    yield takeEvery(DECREMENT, decrement);
}

function* increment() {
    // alert('call increment')
    console.log('increment changed');
}

function* decrement() {
    // alert('call decrement')
    console.log('decrement changed');
}