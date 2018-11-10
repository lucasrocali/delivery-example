import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import storesReducer from './stores/reducer';
import { navReducer } from '../navigation/RootNavigation';

const rootReducer = combineReducers({
    auth_reducer: authReducer,
    stores_reducer: storesReducer,
    nav: navReducer,
});

export default rootReducer;
