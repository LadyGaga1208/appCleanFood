import { GET_BANNER_FAILED, GET_BANNER_SUCCESS, GET_BANNER } from '../actions/types';

const initState = {
    loading: false,
    data: [],
    error: ''
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_BANNER:
            return { ...state, loading: true };
        case GET_BANNER_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case GET_BANNER_FAILED:
            return { ...state, loading: true, error: action.error };
        default:
            return { ...state };
    }
};
