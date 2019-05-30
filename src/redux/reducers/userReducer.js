import {
  SIGNIN_SUCCESS, SIGNIN_FAIL, SIGNIN_REQUEST,
  GET_TOKEN, GET_TOKEN_FAILED, GET_TOKEN_SUCCESS,
  SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS
} from '../actions/types';

const initState = {
  loading: false,
  dataUser: [],
  error: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
    case GET_TOKEN:
    case SIGNUP_REQUEST:
      return { ...state, loading: true };
    case SIGNIN_SUCCESS:
    case GET_TOKEN_SUCCESS:
    case SIGNUP_SUCCESS:
      return { ...state, loading: false, dataUser: action.payload };
    case SIGNIN_FAIL:
    case GET_TOKEN_FAILED:
    case SIGNUP_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
};
