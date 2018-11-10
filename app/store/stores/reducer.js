import * as actionTypes from './actionType'

const initialState = {
    loading: false,
    stores: [],
    page_index: 0
}

const MapStore = (raw) => {
    return {
        id: raw && raw.id || '',
        name: raw && raw.name || '',
        img_url: raw && raw.img_url || '',
        phone_number: raw && raw.phone_number || '',
        delivery_estimation: raw && raw.delivery_estimation || '',
    }
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_STORE_LOADING:
            const { loading } = action
            return {
                ...state,
                loading
            }
        case actionTypes.LOAD_STORE_SUCCESS:
            const { stores } = action
            const mapped_store = stores.map(store => MapStore(store))
            return {
                ...state,
                stores: mapped_store
            }
        default:
            return state
    }
}

