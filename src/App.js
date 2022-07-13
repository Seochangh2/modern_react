import React, { useRef, useState } from "react";
import UserList from "./Component/UserList";
function App() {
  const [users, setUsers] = useState([
    { id: 1, username: "changhee", height: "178" },
    { id: 2, username: "haeju", height: "160" },
  ]);

  return (
    <div>
      <input></input>
      <div>
        <UserList users={users}></UserList>
      </div>
    </div>
  );
}

export default App;
