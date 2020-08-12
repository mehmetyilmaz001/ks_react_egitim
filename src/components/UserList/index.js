
import React from "react";
import { useSelector } from "react-redux";
import actionConsts from '../../state/actions';
import { useDispatch } from 'react-redux';

const UserList = () => {

  const list = useSelector(s => s.users.list);
  const dispatch = useDispatch();

  const _onUserSelect = (i) => {
    dispatch({
      type: actionConsts.SET_SELECTED_USER,
      payload: i
    })

    
  }

  return (
    <>
      <ul className="selectiom-list">
        {list.map((i) => (
          <li key={i.name}>
            <button onClick={() => _onUserSelect(i)}>{i.name}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
