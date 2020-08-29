import * as TYPES from './action-types';

const INITIAL_STATE = {
    blogList: [],
    isLoading: false,
    error: false
};
export const blogReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
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
        default:
            return state;

    }
};
