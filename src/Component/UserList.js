import React, { useMemo, useRef, useState } from "react";

const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        ></User>
      ))}
    </div>
  );
};

function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <span
        style={{ cursor: "pointer", color: user.active ? "blue" : "black" }}
        onClick={() => onToggle(user.id)}
      >
        이름 : {user.username}{" "}
      </span>
      <span>키 : {user.height} </span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}
export default React.memo(UserList);
