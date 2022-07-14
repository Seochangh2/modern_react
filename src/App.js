import React, { useMemo, useRef, useState } from "react";
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
    setUsers((users) =>
      users.concat({ id: next_id.current, username: username, height: height })
    );
    next_id.current += 1;
  };
  const onRemove = (id) => {
    setUsers((users) => users.filter((user) => user.id != id));
  };
  const onToggle = (id) => {
    setUsers(
      users.map(
        (users) => (user) =>
          user.id === id ? { ...user, active: !user.active } : user
      )
    );
    //setUsers 를 함수형 업데이트 함으로서 리렌더링 최적화
  };
  const countActiveUsers = (users) => {
    return users.filter((user) => user.active).length;
  };
  const [users, setUsers] = useState([
    { id: 1, username: "changhee", height: "178", active: true },
    { id: 2, username: "haeju", height: "160", active: false },
  ]);
  const [inputs, setInputs] = useState({ username: "", height: "" });
  const { username, height } = inputs;
  const next_id = useRef(3);
  const active_count = useMemo(() => countActiveUsers(users), [users]);
  //useMemo : deps에 들어있는 내용이 바뀔때에만 해당함수연산( 불필요햔 리렌더링 X)
  return (
    <div>
      <UserManager
        username={username}
        height={height}
        onInputChange={onInputChange}
        onCreate={onCreate}
      ></UserManager>
      <div>
        <UserList
          users={users}
          onRemove={onRemove}
          onToggle={onToggle}
        ></UserList>
        <div>활성 사용자 수 : {active_count}</div>
      </div>
    </div>
  );
}

export default App;
