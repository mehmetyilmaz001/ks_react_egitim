import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Intro = ({onDone}) => {

    const dispatch = useDispatch();

    const getAndSetAuthUser = async () => {
        const authUser = await localStorage.getItem("authUser");
        dispatch({
            type: "SET_AUTH_USER",
            payload: authUser
        });

        setTimeout(() => {
            onDone && onDone();    
        }, 1000);
        
    }

    useEffect(() => {
        getAndSetAuthUser();
    }, []);

    return ( 
        <>
            KS React Eğitim
        </>
     );
}
 
export default Intro;