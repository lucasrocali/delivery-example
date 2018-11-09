import * as actionTypes from './actionType'

const initialState = {
    loading: false,
    user: {}
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.AUTH_LOADING:
            const { loading } = action
            return {
                ...state,
                loading
            }
        case actionTypes.AUTH_SUCCESS:
            const { user } = action
            return {
                ...state,
                user
            }
        case actionTypes.LOGOUT:
            return initialState
        default:
            return state
    }
}

