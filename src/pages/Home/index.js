import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'

export const isTest = () => {
  console.log(process.env);
  return process.env.REACT_APP_ENVIRONMENT === 'test';
}

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_APP_TITLE",
      payload: "Anasayfa - "
    })
  }, []);


  return (
    <>
        {isTest() && <>Şuan test ortamındasınız</>}
        <div className="card">Anasayfa</div>
    </>
  );
};

export default Home;
