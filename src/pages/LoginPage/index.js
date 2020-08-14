import React, { useState } from 'react';
import { login } from '../../state/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation }  from 'react-router-dom';
import { useDidUpdate } from '../../hooks';

const LoginPage = () => {

    const dispatch = useDispatch();

    const [ state, setState ] = useState({
        email: "",
        pass: ""
    })

    const { email, pass } = state;

    const hasErr = useSelector(s => s.auth.hasErr);
    const loading = useSelector(s => s.auth.loading);


    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    useDidUpdate(() => {
        if(!hasErr){
            console.log("hasr", hasErr, from);
            history.replace(from);
        }
    }, [loading])

    const _login = () => {
        if(email === "" || pass === ""){
            alert("Lütfen giriş bilgilerinizi doldurunuz!");
            return;
        }

        dispatch(login(email, pass));

    
    }

    return ( 
        <>
            <label>Kullanıcı Adı:</label>
            <input value={email} onChange={(e) => setState({...state, email: e.target.value})} /> <br/>
            
            <label>Şifre</label>
            <input value={pass} onChange={(e) => setState({...state, pass: e.target.value})} /> <br/><br/>

            <button onClick={_login}>Giriş Yap</button>
        </>
     );
}
 
export default LoginPage;