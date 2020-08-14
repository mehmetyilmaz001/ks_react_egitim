import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from "../../state/actions/users";

const UserDetail = ({onResetUser}) => {

  const dispatch = useDispatch();
  const user = useSelector(s => s.users.selectedUser);

  const _onDeleteUser = (id) => {
      dispatch(deleteUser(id))
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
      <button onClick={() => _onDeleteUser(user.id)} style={{color:"red"}}>X Sil</button>
    </div>
  );
};

export default UserDetail;
