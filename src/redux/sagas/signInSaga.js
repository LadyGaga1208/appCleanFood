import { put, takeLatest, call } from 'redux-saga/effects'
import { SIGNIN_SUCCESS, SIGNIN_FAIL, SIGNIN_REQUEST } from '../actions/types'
const axios = require('axios');


import ApiService from '../../api'

function* userLogin(action) {
  try {
    // axios.post('http://hoangtung.site/api/user/login', action.userLogin)
    //   .then(function (response) {
    //     console.log(response, "ket qua");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     console.log(error.request);

    //   });
    // const response = yield axios.post('http://hoangtung.site/api/user/login', action.userLogin);
    console.log(action.userLogin, "heheh")
    const response = yield ApiService.signIn(action.userLogin);
    console.log(response, "hahahah")
    if (response.status === true) {
      yield put({
        type: SIGNIN_SUCCESS,
        payload: response.data,
      })
    } else {
      yield put({
        type: SIGNIN_FAIL,
      })
    }
  } catch (error) {
    console.log(error.request);

    yield put({
      type: SIGNIN_FAIL,
    })
  }
}

export function* signInSaga() {
  yield takeLatest(SIGNIN_REQUEST, userLogin)
}
