import { GET_CATALOGUES, GET_CATALOGUES_SUCCESS, GET_CATALOGUES_FAILED } from '../actions/types';

const initState = {
    loading: false,
    data: [],
    error: ''
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_CATALOGUES:
            return { ...state, loading: true };
        case GET_CATALOGUES_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case GET_CATALOGUES_FAILED:
            return { ...state, loading: true, error: action.error };
        default:
            return { ...state };
    }
};
