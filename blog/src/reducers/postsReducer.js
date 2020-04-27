import { bindActionCreators } from "redux";

export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }


    // bad! 
    // mutate state.name = 'sam';
    // return axios.get()
}