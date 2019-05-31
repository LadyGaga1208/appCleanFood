import { all } from 'redux-saga/effects';
import { signInSaga, signUpSaga } from './userSaga';
import { 
  watchGetBanner, watchGetNewProduct, 
  watchGetCatalogues, watchGetSuggest 
} from './homeSaga';

export default function* rootSaga() {
  yield all([
    signInSaga(),
    signUpSaga(),
    watchGetBanner(),
    watchGetNewProduct(),
    watchGetCatalogues(),
    watchGetSuggest()
  ]);
}
