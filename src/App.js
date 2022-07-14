import React, { useRef, useState } from "react";
import UserList from "./Component/UserList";
import UserManager from "./Component/UserManager";

function App() {
  const onInputChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onCreate = () => {
    setUsers(
      users.concat({ id: next_id.current, username: username, height: height })
    );
    next_id.current += 1;
  };
  const [users, setUsers] = useState([
    { id: 1, username: "changhee", height: "178" },
    { id: 2, username: "haeju", height: "160" },
  ]);
  const [inputs, setInputs] = useState({ username: "", height: "" });
  const { username, height } = inputs;
  const next_id = useRef(3);
  return (
    <div>
      <UserManager
        username={username}
        height={height}
        onInputChange={onInputChange}
        onCreate={onCreate}
      ></UserManager>
      <div>
        <UserList users={users}></UserList>
      </div>
    </div>
  );
}

export default App;
