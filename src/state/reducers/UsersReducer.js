import actionConsts from '../actions';

const INITIAL_STATE =  {
    list: [
        { name: "Mehmet", surname: "Yılmaz", city: "İstanbul" },
        { name: "Erol", surname: "Ülgü", city: "Hatay" },
        { name: "Emral", surname: "Yılmaz", city: "İstanbul" },
      ],

      selectedUser: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
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
    
        default:
            return state;
    }
}