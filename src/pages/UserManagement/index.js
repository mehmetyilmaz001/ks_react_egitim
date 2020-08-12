import React, { useState, useEffect } from 'react';
import UserList from '../../components/UserList';
import UserDetail from '../../components/UserDetail';
import UserForm  from '../../components/UserForm';
import { useDispatch, useSelector } from 'react-redux'
import { useDidUpdate } from '../../hooks';
 
const UserManagement = () => {

    const [ title, setTitle ] = useState("Kullanıcı Yönetimi");

    const selectedUser = useSelector(s => s.users.selectedUser);
    const dispatch = useDispatch();


    const _sendTitleToGlobal = () => {
        dispatch({
            type: "SET_APP_TITLE",
            payload: title
          })
    }

    useEffect(() => {
        _sendTitleToGlobal();
        
    }, []);


    useDidUpdate(() => {
        alert("title değişikliği yakalandı!")
    }, [title])



    useEffect(() => {
        return () => {
            alert("component dom'dan silinecek");
        }
    }, [])



    return (
        <>
        <div className="component-base">
            <UserList/>

            {selectedUser && 
                <UserDetail />
            }

            <button onClick={() => setTitle("İşlem yapılıyor...")}>İşlem Yap</button>
            
            <UserForm  />

        </div>
        </>
     );
}
 
export default UserManagement;