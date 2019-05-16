import { all, fork } from 'redux-saga/effects';
import { signInSaga } from './signInSaga';
import { getDataBanner } from './homeSaga';

export default function* rootSaga() {
  yield all([
    signInSaga(),
    getDataBanner()
  ]);
}
