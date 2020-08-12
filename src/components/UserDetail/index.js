import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import actionConsts from '../../state/actions';

const UserDetail = ({onResetUser}) => {

  const dispatch = useDispatch();
  const user = useSelector(s => s.users.selectedUser);

  const _onDeleteUser = (name) => {
      dispatch({
        type: actionConsts.DELETE_USER,
        payload: name
      });

      dispatch({
        type: actionConsts.SET_SELECTED_USER,
        payload: null
      });
  } 


    if(!user){
        return (<>Veri bulunamadı!</>)
    }

  return (
    <div className="card">
      <div>
        İsim : {user.name}
        <br />
        Soyisim : {user.surname} <br />
        Şehir : {user.city}
        <br />
      </div>

      <button onClick={onResetUser}>Seçimi Kaldır</button>
      <button onClick={() => _onDeleteUser(user.name)} style={{color:"red"}}>X Sil</button>
    </div>
  );
};

export default UserDetail;
