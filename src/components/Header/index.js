import React from 'react';
import { useSelector } from 'react-redux';
import { logout } from '../../state/actions/auth';
import { useDispatch} from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const title = useSelector(state => state.app.title);

    return(
        <header>
            {title} 
            <button onClick={() => dispatch(logout())}>Logout</button>
        </header>
    );
}

export default Header;