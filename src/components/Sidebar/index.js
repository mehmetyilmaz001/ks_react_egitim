import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/user-management">Kullanıcı Yönetimi</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
