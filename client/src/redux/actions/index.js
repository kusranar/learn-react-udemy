import { SIGN_IN, SIGN_OUT } from '../../utils/constants';

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