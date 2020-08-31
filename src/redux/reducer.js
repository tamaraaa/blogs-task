import * as TYPES from './action-types';

const INITIAL_STATE = {
    blogList: [],
    isLoading: false,
    isReady: false,
    error: false,
    searchedQuery: '',
    categoryId: null,
    categories: [],
    currentPost: {title: '', text: '', isNew: true},
    notification: null
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
                // set selection to the first category, if available
                categoryId: payload && payload[0] && payload[0].id,
            };
		case TYPES.GET_CATEGORIES_ERROR:
			return {
                ...state,
                isLoading: false,
                error: payload,
                notification: {type: 'error', text: 'Error getting categories!'}
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
                notification: {type: 'error', text: 'Error getting blog posts!'}
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
                notification: {type: 'success', text: 'Post successfully created!'}

            };
        case TYPES.CREATE_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                notification: {type: 'error', text: 'Error creating blog post!'}
            };    
        case TYPES.EDIT_POST_START:
            return {
                ...state,
                isLoading: true
            };
        case TYPES.EDIT_POST_END:
            return {
                ...state,
                isLoading: false,
                notification: {type: 'success', text: 'Post successfully saved!'}

            };
        case TYPES.EDIT_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                notification: {type: 'error', text: 'Error saving blog post!'}
            };                  
        case TYPES.CREATE_CATEGORY_START:
            return {
                ...state,
                isLoading: true,
            };
        case TYPES.CREATE_CATEGORY_END:
            return {
                ...state,
                isLoading: false,
                notification: {type: 'success', text: 'Category successfully created!'}
            };
        case TYPES.CREATE_CATEGORY_ERROR:
            return {
                ...state,
                isLoading: false,
                notification: {type: 'error', text: 'Error creating category!'}
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
                isLoading: false
            };
        case TYPES.SEARCH_ERROR:
            return {
                ...state,
                isLoading: false,
                notification: {type: 'error', text: 'Search error!'}
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
        case TYPES.DELETE_POST_START:
            return {
                ...state,
                isLoading: true,
            };    
        case TYPES.DELETE_POST_END:
            return {
                ...state,
                isLoading: false,
                notification: {type: 'succes', text: 'Post deleted!'}
            };
        case TYPES.DELETE_POST_ERROR:
            return {
                ...state,
                notification: {type: 'error', text: 'Post is not deleted!'}
            };  
        case TYPES.REMOVE_NOTIFICATION:
            return {
                ...state,
                notification: null
            };  
        default:
            return state;

    }
};
