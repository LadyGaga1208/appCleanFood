import { put, takeLatest } from 'redux-saga/effects';
import * as Consts from '../actions/types';

import client from '../../api';
import * as Api from '../../api/api';

function* getBanner() {
    try {
        const response = yield client.post(Api.banner);
        if (response.data.success === true) {
            yield put({
                type: Consts.GET_BANNER_SUCCESS,
                payload: response.data.user,
            });
        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.msg);
            yield put({
                type: Consts.GET_BANNER_FAILED,
                error: error.response.data.msg
            });
        } else if (error.request) {
            console.log(error.request);
            yield put({
                type: Consts.GET_BANNER_FAILED,
                error: error.request
            });
        } else {
            console.log('Error', error.message);
            yield put({
                type: Consts.GET_BANNER_FAILED,
                error: error.message
            });
        }
    }
}

export function* getDataBanner() {
    yield takeLatest(Consts.GET_BANNER, getBanner);
}
