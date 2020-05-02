import apis from '../../apis';
import history from '../../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS
} from '../../utils/constants';

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValue) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await apis.post('/streams', { ...formValue, userId });
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    });
    history.push('/');
}

export const fetchStreams = () => async dispatch => {
    const response = await apis.get('/streams');
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    });
}

export const fetchStream = streamId => async dispatch => {
    const response = await apis.get(`/streams/${streamId}`);
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    });
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await apis.patch(`/streams/${id}`, formValues);
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    });
    history.push('/');
}

export const deleteStream = streamId => async dispatch => {
    await apis.delete(`/streams/${streamId}`);
    dispatch({
        type: DELETE_STREAM,
        payload: streamId
    });
    history.push('/');
}