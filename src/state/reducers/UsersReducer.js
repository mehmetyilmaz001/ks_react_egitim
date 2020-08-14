import actionConsts from '../actions';

const INITIAL_STATE =  {
    list: [],
    selectedUser: null,
    loading: false,
    
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
     
      case actionConsts.FETCH_USERS_REQUEST:
            return {...state, loading: true}
      
      case actionConsts.FETCH_USERS_SUCCESS:
            return {...state, list: action.payload, loading: false}

    case actionConsts.FETCH_USERS_FAIL:
            return {...state, loading: false}

     
     case actionConsts.FETCH_USER_DETAIL_REQUEST:
            return {...state, loading: true}
      
      case actionConsts.FETCH_USER_DETAIL_SUCCESS:
            return {...state, selectedUser: action.payload, loading: false}

    case actionConsts.FETCH_USER_DETAIL_FAIL:
            return {...state, loading: false}


      case actionConsts.SET_SELECTED_USER:
            return {...state, selectedUser: action.payload}

      case actionConsts.CREATE_USER:
            return {...state, list: [...state.list, action.payload]}
       
       case actionConsts.DELETE_USER:
            return {...state, list: state.list.filter(f => f.name !== action.payload)}
        
       case actionConsts.UPDATE_USER:

            const foundIndex = state.list.findIndex(f => f.name === action.payload);
            const newList = state.list[foundIndex] = action.payload;  

            return {...state, list: newList}



      case "POST_USER_REQUEST":
            return {...state, loading: true}
            
      case "POST_USER_SUCCESS":
      return {...state, list: [...state.list, action.payload], loading: false}

      case "POST_USER_FAIL":
            return {...state, msg: action.payload, loading: false}
    
        default:
            return state;
    }
}