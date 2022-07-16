import React, { useMemo, useRef, useState, useReducer } from "react";
import UserList from "./Component/UserList";
import UserManager from "./Component/UserManager";
const initialState = {
  inputs: {
    username: "",
    height: "",
  },
  users: [
    { id: 1, username: "changhee", height: "178", active: true },
    { id: 2, username: "haeju", height: "160", active: false },
  ],
};
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id != action.id),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, height } = state.inputs;
  const { users } = state;
  const next_id = useRef(3);
  const countActiveUsers = (users) => {
    return state.users.filter((user) => user.active).length;
  };
  const active_count = useMemo(() => countActiveUsers(users), [users]);
  //useMemo : deps에 들어있는 내용이 바뀔때에만 해당함수연산( 불필요햔 리렌더링 X)
  const onInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  };
  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: next_id.current,
        username,
        height,
      },
    });
    next_id.current += 1;
  };
  const onRemove = (id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  };
  const onToggle = (id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
    //setUsers 를 함수형 업데이트 함으로서 리렌더링 최적화
  };

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
