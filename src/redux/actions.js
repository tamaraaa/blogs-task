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
            console.log('results', resp.data.resultData);
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
    console.log('categoryId-create', categoryId);
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
            dispatch(getCategories());
        })
        .catch(function (error) {
            console.log(error);
            dispatch(createCategoryError(error));
          });

    };
};
// SEARCH POST
const searchStart = () =>{
    return {
        type: TYPES.SEARCH_START
    };
};
const searchEnd = (payload) =>{
    return {
        type: TYPES.SEARCH_END,
        payload
    };
};
const searchError = (error) =>{
    return {
        type: TYPES.SEARCH_ERROR,
        error
    };
};
export const search = (term, categoryId) =>{
    return dispatch =>{
        dispatch(searchStart());
        if (term){
            axios.get(`https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/Search?term=${term}`)
            .then(resp => {
                dispatch(searchEnd(resp.data.resultData));
            })
            .catch(function (error) {
                console.log(error);
                dispatch(searchError(error));
              });
        } else {
            dispatch(getBlogs(categoryId));
        }
        
    };
};
// DELETE POST
const deletePostStart = () =>{
    return {
        type: TYPES.DELETE_POST_START
    };
};
const deletePostEnd = () =>{
    return {
        type: TYPES.DELETE_POST_END,
    };
};
const deletePostError = (error) =>{
    return {
        type: TYPES.DELETE_POST_ERROR,
        error
    };
};
export const deletePost = (post, categoryId) =>{
    return (dispatch, getState) =>{
        dispatch(deletePostStart());
        axios.delete(`https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${post}`)
        .then(resp => {
            dispatch(deletePostEnd());
            dispatch(getBlogs(categoryId));

        })
        .catch(function (error) {
            console.log(error);
            dispatch(deletePostError(error));
          });
    };
};
export const setCurrnetPost = post => {
    return dispatch =>{
        dispatch({
            type: TYPES.SET_CURRENT_POST,
            payload: post
        });
    };
};
const editPostStart = () =>{
    return {
        type: TYPES.EDIT_POST_START
    };
};
const editPostEnd = () =>{
    return {
        type: TYPES.EDIT_POST_END,
    };
};
const editPostError = (error) =>{
    return {
        type: TYPES.EDIT_POST_ERROR,
        error
    };
};
export const editPost = (text, title) =>{
    return (dispatch, getState) =>{
        const currentPost = getState().currentPost;
        const updatedPost = { 
                id: currentPost.id,
                categoryId: currentPost.categoryId,
                text,
                title
            };
        console.log('updatedPost', updatedPost, 'post', getState().currentPost);
        dispatch(editPostStart());
        axios.put(`https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts/${updatedPost.id}`, {...updatedPost})
        .then(resp => {
            dispatch(editPostEnd());
            dispatch(getBlogs(updatedPost.categoryId));

        })
        .catch(function (error) {
            console.log(error);
            dispatch(editPostError(error));
          });
    };
};

export const activeCategory = payload =>{
    return dispatch=>{dispatch({
        type: TYPES.SET_ACTIVE_CATEGORY,
        payload
    });};
};
