const INITIAL_STATE =  {
    title: "",
}

export default (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case "SET_APP_TITLE":
            return {...state, title: action.payload}
    
        default:
            return state;
    }
}