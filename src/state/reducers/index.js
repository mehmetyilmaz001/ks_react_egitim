import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import UsersReducer from './UsersReducer';

export default combineReducers({
    app: AppReducer,
    users: UsersReducer
})