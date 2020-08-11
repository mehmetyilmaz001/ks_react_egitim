import React from "react";

const UserDetail = ({user, onResetUser, onDeleteUser}) => {


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
      <button onClick={() => onDeleteUser(user.name)} style={{color:"red"}}>X Sil</button>
    </div>
  );
};

export default UserDetail;
