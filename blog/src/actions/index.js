import jsonPlaceholderApi from '../apis/jsonPlaceholderApi';

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholderApi.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response });
}