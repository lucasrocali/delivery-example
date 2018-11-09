
import * as actionTypes from './actionType'

export function login(email, password) {
    return {
        type: actionTypes.AUTH,
        email,
        password
    }
}

export function setLoading(loading) {
    return {
        type: actionTypes.AUTH_LOADING,
        loading
    }
}

export function setSuccess(user) {
    return {
        type: actionTypes.AUTH_SUCCESS,
        user
    }
}

export function logout() {
    return {
        type: actionTypes.LOGOUT
    }
}