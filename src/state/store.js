import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk'

export default createStore(reducer, {}, applyMiddleware(ReduxThunk));