import { all, fork } from 'redux-saga/effects';
import { signInSaga, signUpSaga } from './userSaga';
import { watchGetBanner, watchGetNewProduct } from './homeSaga';

export default function* rootSaga() {
  yield all([
    signInSaga(),
    signUpSaga(),
    watchGetBanner(),
    watchGetNewProduct()
  ]);
}
