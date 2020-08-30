import * as TYPES from './action-types';
import axios from 'axios';

// GET ALL CATEGORIES
const getCategoriesStart = () =>{
    return {
        type: TYPES.GET_CATEGORIES_START
    };
};
const getCategoriesEnd = (payload) =>{
    return {
        type: TYPES.GET_CATEGORIES_END,
        payload
    };
};
const getCategoriesError = (error) =>{
    return {
        type: TYPES.GET_CATEGORIES_ERROR,
        error
    };
};
export const getCategories = () =>{
    return dispatch =>{
        dispatch(getCategoriesStart());
        axios.get('https://frontend-api-test-nultien.azurewebsites.net//api/Category')
        .then(resp => {
           console.log('data', resp.data);
           dispatch(getCategoriesEnd(resp.data.resultData));

        })
        .catch(function (error) {
            dispatch(getCategoriesError(error));
            console.log(error);
          });
    };
};

// GET BLOGS FOR CATEGORY

const getBlogsStart = () =>{
    return {
        type: TYPES.GET_BLOGS_START
    };
};
const getBlogsEnd = (payload) =>{
    return {
        type: TYPES.GET_BLOGS_END,
        payload
    };
};
const getBlogsError= (error) =>{
    return {
        type: TYPES.GET_BLOGS_ERROR,
        error
    };
};
export const getBlogs = (categoryId) =>{
    console.log('categoryId', categoryId);
    return dispatch =>{
        dispatch(getBlogsStart());
        axios.get('https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/GetPostByCategory?categoryId='+categoryId)
        .then(resp => {
            dispatch(getBlogsEnd(resp.data.resultData));
        })
        .catch(function (error) {
            console.log(error);
            dispatch(getBlogsError(error));
          });
    };
};

// CREATE BLOG POST
const createPostStart = () =>{
    return {
        type: TYPES.CREATE_POST_START
    };
};
const createPostEnd = () =>{
    return {
        type: TYPES.CREATE_POST_END,
    };
};
const createPostError = (error) =>{
    return {
        type: TYPES.CREATE_POST_ERROR,
        error
    };
};
export const createPost = (categoryId, title, text) =>{
    return dispatch =>{
        dispatch(createPostStart());
        axios.post('https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts', {categoryId, title, text})
        .then(resp => {
            dispatch(createPostEnd());
            dispatch(getBlogs(categoryId));
        })
        .catch(function (error) {
            console.log(error);
            dispatch(createPostError(error));
          });
    };
};
// CREATE CATEGORY

const createCategoryStart = () =>{
    return {
        type: TYPES.CREATE_CATEGORY_START
    };
};
const createCategoryEnd = (payload) =>{
    return {
        type: TYPES.CREATE_CATEGORY_END,
        payload
    };
};
const createCategoryError = (error) =>{
    return {
        type: TYPES.CREATE_CATEGORY_ERROR,
        error
    };
};
export const createCategory = title =>{
    return dispatch =>{
        dispatch(createCategoryStart());
        axios.post('https://frontend-api-test-nultien.azurewebsites.net/api/Category', {name: title})
        .then(resp => {
            dispatch(createCategoryEnd(resp.data.resultData));
        })
        .catch(function (error) {
            console.log(error);
            dispatch(createCategoryError(error));
          });

    };
};
