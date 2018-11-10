import * as actionTypes from './actionType'

export function loadStores() {
    return {
        type: actionTypes.LOAD_STORE
    }
}

export function setLoading(loading) {
    return {
        type: actionTypes.LOAD_STORE_LOADING,
        loading
    }
}

export function setSuccess(stores) {
    return {
        type: actionTypes.LOAD_STORE_SUCCESS,
        stores
    }
}