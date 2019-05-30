import { put, takeLatest } from 'redux-saga/effects';
import { SIGNIN_SUCCESS, SIGNIN_FAIL, SIGNIN_REQUEST } from '../actions/types';

import client from '../../api';
import * as Api from '../../api/api';

function* userLogin(action) {
  try {
    const response = yield client.post(Api.sigIn, action.userLogin);
    if (response.data.success === true) {
      yield put({
        type: SIGNIN_SUCCESS,
        payload: response.data.user,
      });
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response, "hehehe");
      yield put({
        type: SIGNIN_FAIL,
        error: error.response.data.msg
      });
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request, "hihihi");
      yield put({
        type: SIGNIN_FAIL,
        error: error.request
      });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message, "hohoho");
      yield put({
        type: SIGNIN_FAIL,
        error: error.message
      });
    }
  }
}

export function* signInSaga() {
  yield takeLatest(SIGNIN_REQUEST, userLogin);
}
