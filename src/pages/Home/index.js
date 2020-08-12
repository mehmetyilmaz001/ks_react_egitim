import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'

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
        <div className="card">Anasayfa</div>
    </>
  );
};

export default Home;
