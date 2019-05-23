import { GET_NEW_PRODUCT, GET_NEW_PRODUCT_FAILED, GET_NEW_PRODUCT_SUCCESS } from '../actions/types';

const initState = {
    loading: false,
    data: [],
    error: ''
};

export default (state = initState, action) => {
    switch (action.type) {
        case GET_NEW_PRODUCT:
            return { ...state, loading: true };
        case GET_NEW_PRODUCT_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case GET_NEW_PRODUCT_FAILED:
            return { ...state, loading: true, error: action.error };
        default:
            return { ...state };
    }
};
