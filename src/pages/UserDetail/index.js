import React, {useEffect} from 'react';
import { getUserDetail } from '../../state/actions/users';
import { useParams } from 'react-router-dom';
import { UserDetail } from '../../components';
import { useDispatch} from 'react-redux';

const UserDetailPage = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, []);

  return ( 
    <>
      <UserDetail />
    </>
   );
}
 
export default UserDetailPage;