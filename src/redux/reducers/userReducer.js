import { SIGNIN_SUCCESS, SIGNIN_FAIL } from '../actions/types';

const initState = {
  loading: true,
  dataUser: [],
  error: ''
};

export default (state = initState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return { ...state, loading: false, dataUser: action.payload };
    case SIGNIN_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
};
