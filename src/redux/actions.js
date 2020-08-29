import * as TYPES from './action-types';
import axios from 'axios';

export const getBlogsStart = () =>{
    return TYPES.GET_BLOGS_START;
};
export const getBlogsEnd = () =>{
    return TYPES.GET_BLOGS_END;
};
export const getBlogsErroe = () =>{
    return TYPES.GET_BLOGS_ERROR;
}
;
