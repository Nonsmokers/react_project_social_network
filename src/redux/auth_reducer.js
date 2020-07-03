const SET_USER_DATA = 'SET_USER_DATA'

let initial_state = {
    id: null,
    email: null,
    login: null,
    is_fetching: false,
}

const auth_reducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.data }
        }
        default:
            return state;
    }
}

export const set_user_data = (id, email, login, is_fetching) => {
    return {type: SET_USER_DATA, data: {id,email, login, is_fetching}}
}

export default auth_reducer;