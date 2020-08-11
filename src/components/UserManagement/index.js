import React, { useState } from 'react';
import UserList from '../UserList';
import UserDetail from '../UserDetail';
import UserForm  from '../UserForm';
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
        <div className="component-base">
            <UserList list={users} onUserSelect={(user) => setSelectedUser(user)}/>

            {selectedUser && 
                <UserDetail user={selectedUser} onDeleteUser={_onDelete} onResetUser={() => setSelectedUser(null)}/>
            }
            
            <UserForm onInsert={_onInsert} />

        </div>
     );
}
 
export default UserManagement;