
import React from "react";


const UserList = ({list, onUserSelect}) => {

  return (
    <>
      <ul className="selectiom-list">
        {list.map((i) => (
          <li key={i.name}>
            <button onClick={() => onUserSelect(i)}>{i.name}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
