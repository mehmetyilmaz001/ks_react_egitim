
import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { getUsers } from '../../state/actions/users'
import { useHistory } from 'react-router-dom';

const UserList = () => {

  const list = useSelector(s => s.users.list);
  const loading = useSelector(s => s.users.loading);
  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // const _onUserSelect = (i) => {
  //   dispatch({
  //     type: actionConsts.SET_SELECTED_USER,
  //     payload: i
  //   })
  // }

  if(loading){
    return <>Kullanıcı listesi getiriliyor...</>
  }


  return (
    <>
      <ul className="selectiom-list">
        {list.map((i) => (
          <li key={i.name}>
            <button onClick={() => history.push(`/user-detail/${i.id}`)}>{i.name}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
