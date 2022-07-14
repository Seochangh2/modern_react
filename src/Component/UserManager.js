import React, { useMemo, useRef, useState } from "react";
const UserManager = ({ username, height, onInputChange, onCreate }) => {
  return (
    <div>
      <input
        name="username"
        placeholder="이름"
        value={username}
        onChange={onInputChange}
      ></input>
      <input
        name="height"
        placeholder="키"
        value={height}
        onChange={onInputChange}
      ></input>
      <button onClick={onCreate}>추가</button>
      <button>수정</button>
      <button>삭제</button>
    </div>
  );
};
export default React.memo(UserManager);
// React.memo : 컴포넌트의 리렌더링 성능 최적화
