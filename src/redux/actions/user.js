import { SIGNIN_REQUEST, GET_TOKEN, GET_TOKEN_FAILED, GET_TOKEN_SUCCESS, SIGNUP_REQUEST } from './types';

export const userLogin = data => ({
  type: SIGNIN_REQUEST,
  userLogin: data,
});

export const userSignUp = data => ({
  type: SIGNUP_REQUEST,
  userSignUp: data
})

export const getToken = () => ({
  type: GET_TOKEN,
});

export const getTokenSuccess = (data) => ({
  type: GET_TOKEN_SUCCESS,
  payload: data
});

export const getTokenFailed = (error) => ({
  type: GET_TOKEN_FAILED,
  error,
});
