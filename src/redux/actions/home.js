import { GET_BANNER, GET_NEW_PRODUCT, GET_CATALOGUES, GET_SUGGEST } from './types';

export const getDataBanner = () => ({
    type: GET_BANNER
});

export const getNewProduct = () => ({
    type: GET_NEW_PRODUCT
});

export const getCatalogues = () => ({
    type: GET_CATALOGUES
});

export const getSuggestProduct = () => ({
    type: GET_SUGGEST
});
