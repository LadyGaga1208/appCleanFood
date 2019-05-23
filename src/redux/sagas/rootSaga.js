import { all, fork } from 'redux-saga/effects';
import { signInSaga } from './signInSaga';
import { watchGetBanner, watchGetNewProduct } from './homeSaga';

export default function* rootSaga() {
  yield all([
    signInSaga(),
    watchGetBanner(),
    watchGetNewProduct()
  ]);
}
