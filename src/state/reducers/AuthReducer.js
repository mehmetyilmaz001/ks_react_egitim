import actionConst from '../actions';

const INITIAL_STATE =  {
    authUser: null,
    loading: false,
    msg: "",
    hasError: false

}

export default (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case actionConst.SET_AUTH_USER:
            return {...state, authUser: action.payload, loading: false, msg: ""}
        
        case actionConst.POST_LOGIN_REQUEST:
            return {...state, loading: true}
        
        case actionConst.POST_LOGIN_FAIL:
            return {...state, loading: false, msg: action.payload, hasError: true}
        
        case actionConst.LOGOUT:
            return {...state, authUser: null}
    
        default:
            return state;
    }
}