import { GET_BANNER_FAILED, GET_BANNER_SUCCESS } from '../actions/types';

const initState = {
    loading: true,
    data: [],
    error: ''
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_BANNER_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case GET_BANNER_FAILED:
            return { ...state, loading: false, error: action.error };
        default:
            return { ...state };
    }
};
