import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import { navReducer } from '../navigation/RootNavigation';

const rootReducer = combineReducers({
    auth_reducer: authReducer,
    nav: navReducer,
});

export default rootReducer;
