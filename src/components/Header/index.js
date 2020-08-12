import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    
    const title = useSelector(state => state.app.title);

    return(
        <header>{title}</header>
    );
}

export default Header;