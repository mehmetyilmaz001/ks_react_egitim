import React, { useState } from 'react';
import UserList from '../../components/UserList';
import UserDetail from '../../components/UserDetail';
import UserForm  from '../../components/UserForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { usersDefaultList } from '../../data';
 
const UserManagement = () => {

    const [ users, setUsers ] = useState(usersDefaultList);
    const [ selectedUser, setSelectedUser ] = useState(null);

    const _onInsert = (values) => {
        console.log(values);
        let newList = [...users, values];
        setUsers(newList);
    }
    
    const _onDelete = (name) => {
        let newList = users.filter(f => f.name !== name);
        setUsers(newList);
        setSelectedUser(null);
    }

    return (
        <>
        <Header title="Kullanıcı Yönetimi" />
        <div className="component-base">
            <UserList list={users} onUserSelect={(user) => setSelectedUser(user)}/>

            {selectedUser && 
                <UserDetail user={selectedUser} onDeleteUser={_onDelete} onResetUser={() => setSelectedUser(null)}/>
            }
            
            <UserForm onInsert={_onInsert} />

        </div>
        <Footer />
        </>
     );
}
 
export default UserManagement;