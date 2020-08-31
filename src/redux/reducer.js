import * as TYPES from './action-types';

const INITIAL_STATE = {
    blogList: [],
    isLoading: false,
    isReady: false,
    error: false,
    searchedQuery: '',
    categoryId: null,
    categories: [],
    currentPost: {title: '', text: '', isNew: true}
};

export const blogReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case TYPES.GET_CATEGORIES_START:
			return {
                ...state,
                isLoading: true
            };
		case TYPES.GET_CATEGORIES_END:
            return {
                ...state,
                isReady: true,
                isLoading: false,
                categories: payload,
                categoryId: payload && payload[0] && payload[0].id
            };
		case TYPES.GET_CATEGORIES_ERROR:
			return {
                ...state,
                isLoading: false,
                error: payload
            };
        case TYPES.GET_BLOGS_START:
			return {
                ...state,
                isLoading: true
            };
		case TYPES.GET_BLOGS_END:
            return {
                ...state,
                isLoading: false,
                blogList: payload
            };
		case TYPES.GET_BLOGS_ERROR:
			return {
                ...state,
                isLoading: false,
                error: payload
            };
        case TYPES.CREATE_POST_START:
            return {
                ...state,
                isLoading: true
            };
        case TYPES.CREATE_POST_END:
            return {
                ...state,
                isLoading: false,
            };
        case TYPES.CREATE_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload
            };           
        case TYPES.CREATE_CATEGORY_START:
            return {
                ...state,
                isLoading: true
            };
        case TYPES.CREATE_CATEGORY_END:
            return {
                ...state,
                isLoading: false,
                categories: payload,
            };
        case TYPES.CREATE_CATEGORY_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload
            }; 
        case TYPES.SEARCH_START:
            return {
                ...state,
                isLoading: true
            };
        case TYPES.SEARCH_END:
            return {
                ...state,
                blogList: payload,
            };
        case TYPES.SEARCH_ERROR:
            return {
                ...state,
                isLoading: false,
                error: payload
            };    
        case TYPES.SET_CURRENT_POST:
            return {
                ...state,
                currentPost: payload
            };
        case TYPES.SET_ACTIVE_CATEGORY:
            return {
                ...state,
                categoryId: payload
            };
        default:
            return state;

    }
};
