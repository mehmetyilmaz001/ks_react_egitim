import service from '../../service';
import { apiKey } from '../../const';
import actionConst from '../actions';


export const login = (email, password) => {
    
    return dispatch => {

        dispatch({type:actionConst.POST_LOGIN_REQUEST})

        service.post(
            `accounts:signInWithPassword?key=${apiKey}`, 
            {email, password}, 
            {baseURL: "https://identitytoolkit.googleapis.com/v1/", headers: {Authorization: null}}
        ).then(res => {
            console.log(res.data);
            localStorage.setItem("authUser", res.data);

            dispatch({type: actionConst.SET_AUTH_USER, payload: res.data})

        }).catch(err => {
            console.log(err);
            
            dispatch({type: actionConst.POST_LOGIN_FAIL, payload: "Hata oluştu!."})
        });
    }
}


export const logout = () => {
    return dispatch => {
        localStorage.removeItem("authUser");
        dispatch({
            type: actionConst.LOGOUT
        })
    }
}