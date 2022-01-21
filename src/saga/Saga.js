import { put, takeLatest } from 'redux-saga/effects'


function* Action() {
    try {
        yield put('Action', value)
    } catch (e) { console.log('ACTION ERROR: ' + e) }
}
function* mySaga(){
    yield takeLatest('Action', Action)
}
export default mySaga