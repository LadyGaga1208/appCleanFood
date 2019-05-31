import { GET_SUGGEST, GET_SUGGEST_SUCCESS, GET_SUGGEST_FAILED } from '../actions/types';

const initState = {
    loading: false,
    data: [],
    error: ''
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_SUGGEST:
            return { ...state, loading: true };
        case GET_SUGGEST_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case GET_SUGGEST_FAILED:
            return { ...state, loading: true, error: action.error };
        default:
            return { ...state };
    }
};
