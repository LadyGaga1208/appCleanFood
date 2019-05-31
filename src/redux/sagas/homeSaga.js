import { put, takeLatest, select } from 'redux-saga/effects';
import * as Consts from '../actions/types';
import client from '../../api';

function* getBanner() {
    try {
        const state = yield select();
        console.log(state.userReducer.dataUser, 'state cua ung dung');
        if (state.userReducer.dataUser) {
            const token = state.userReducer.dataUser.validate_token;
            console.log(token);
            const response = yield client({
                url: '/home/banner',
                method: 'get',
                headers: {
                    validateToken: `${token}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            console.log(response.data.banner);
            if (response.data.success === true) {
                yield put({
                    type: Consts.GET_BANNER_SUCCESS,
                    payload: response.data.banner,
                });
            }
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

function* getNewProduct() {
    try {
        const state = yield select();
        if (state.userReducer.dataUser) {
            const token = state.userReducer.dataUser.validate_token;
            const response = yield client({
                url: 'home/newproduct',
                method: 'get',
                headers: {
                    validateToken: `${token}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            if (response.data.success === true) {
                yield put({
                    type: Consts.GET_NEW_PRODUCT_SUCCESS,
                    payload: response.data.newProduct,
                });
            }
        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.msg);
            yield put({
                type: Consts.GET_NEW_PRODUCT_FAILED,
                error: error.response.data.msg
            });
        } else if (error.request) {
            console.log(error.request);
            yield put({
                type: Consts.GET_NEW_PRODUCT_FAILED,
                error: error.request
            });
        } else {
            console.log('Error', error.message);
            yield put({
                type: Consts.GET_NEW_PRODUCT_FAILED,
                error: error.message
            });
        }
    }
}

function* getCatalogues() {
    try {
        const state = yield select();
        if (state.userReducer.dataUser) {
            const token = state.userReducer.dataUser.validate_token;
            const response = yield client({
                url: '/home/catalogs',
                method: 'get',
                headers: {
                    validateToken: `${token}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            if (response.data.success === true) {
                yield put({
                    type: Consts.GET_CATALOGUES_SUCCESS,
                    payload: response.data.catalogs,
                });
            }
        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.msg);
            yield put({
                type: Consts.GET_CATALOGUES_FAILED,
                error: error.response.data.msg
            });
        } else if (error.request) {
            console.log(error.request);
            yield put({
                type: Consts.GET_CATALOGUES_FAILED,
                error: error.request
            });
        } else {
            console.log('Error', error.message);
            yield put({
                type: Consts.GET_CATALOGUES_FAILED,
                error: error.message
            });
        }
    }
}

function* getSuggest() {
    try {
        const state = yield select();
        if (state.userReducer.dataUser) {
            const token = state.userReducer.dataUser.validate_token;
            const response = yield client({
                url: '/home/suggestionproduct',
                method: 'get',
                headers: {
                    validateToken: `${token}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });
            if (response.data.success === true) {
                yield put({
                    type: Consts.GET_SUGGEST_SUCCESS,
                    payload: response.data.newProduct,
                });
            }
        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.data.msg);
            yield put({
                type: Consts.GET_SUGGEST_FAILED,
                error: error.response.data.msg
            });
        } else if (error.request) {
            console.log(error.request);
            yield put({
                type: Consts.GET_SUGGEST_FAILED,
                error: error.request
            });
        } else {
            console.log('Error', error.message);
            yield put({
                type: Consts.GET_SUGGEST_FAILED,
                error: error.message
            });
        }
    }
}

export function* watchGetBanner() {
    yield takeLatest(Consts.GET_BANNER, getBanner);
}

export function* watchGetNewProduct() {
    yield takeLatest(Consts.GET_NEW_PRODUCT, getNewProduct);
}

export function* watchGetCatalogues() {
    yield takeLatest(Consts.GET_CATALOGUES, getCatalogues);
}

export function* watchGetSuggest() {
    yield takeLatest(Consts.GET_SUGGEST, getSuggest);
}
