import React from "react";
import { useSelector } from "react-redux";
import { logout } from "../../state/actions/auth";
import { useDispatch } from "react-redux";
import { Layout } from "antd";
const { Header } = Layout;

const CustomHeader = () => {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.app.title);

  return (
    <Header className="header">
      <div className="logo" />
      {title}
      <button onClick={() => dispatch(logout())}>Logout</button>
    </Header>
  );
};

export default CustomHeader;
