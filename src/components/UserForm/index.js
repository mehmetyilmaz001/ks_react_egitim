import React from 'react';
import { useDispatch } from 'react-redux';
import actionConsts from '../../state/actions';
import { insertUser } from '../../state/actions/users';

const initialValues = {
    name: "",
    surname: "",
    city: ""
};

const UserForm = () => {
    
    const [ values, setValues ] = React.useState(initialValues);
    const dispatch = useDispatch();

    const [ msg, setMsg ] = React.useState({
        type: 0,
        msg: ""
    });

    const _onInsert = () => {
        if(values.name === "" || values.surname === "" || values.city === ""){
            setMsg({
                type: 1,
                msg: "Lütfen tüm alanları doldurunuz!"
            })
            return;
        }else{
            setMsg({
                type: 0,
                msg: "Kayıt İşlemi Başarılı."
            })
        }


        // dispatch({
        //     type: actionConsts.CREATE_USER,
        //     payload: values
        // })
        
        dispatch(insertUser(values))
        
        setValues(initialValues);

    }

    return ( 
        <div className="card">
            <label>İsim :</label> <input value={values.name} onChange={(e) => setValues({...values, name: e.target.value}) } /> <br />
            <label>Soyisim:</label> <input value={values.surname} onChange={(e) => setValues({...values, surname: e.target.value}) } /> <br />
            <label>Şehir:</label> <input value={values.city} onChange={(e) => setValues({...values, city: e.target.value}) } /> <br /><br />

            <button onClick={() => _onInsert()}>Kaydet</button>

            {msg.msg && <span style={{color: msg.type === 1 ? "red":"green"}}>{msg.msg}</span>}
        </div>
    );
}
 
export default UserForm;