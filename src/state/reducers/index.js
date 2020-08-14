import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import UsersReducer from './UsersReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    app: AppReducer,
    users: UsersReducer,
    auth: AuthReducer
})