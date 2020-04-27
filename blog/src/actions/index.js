import _ from 'lodash';
import jsonPlaceholderApi from '../apis/jsonPlaceholderApi';

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholderApi.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });

    // bad approach, action must return object
    // return {
    //     type: 'FETCH_POSTS',
    //     payload: response
    // }
}

export const fetchUser = (userId) => async dispatch => {
    const response = await jsonPlaceholderApi.get(`/users/${userId}`);
    dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchPostsAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPost());
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
}

// export const fetchUser = (userId) => dispatch => _fetchUser(userId, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholderApi.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });