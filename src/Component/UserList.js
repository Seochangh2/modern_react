export default function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
}

function User({ user }) {
  return (
    <div>
      <span>이름 : {user.username}</span>
      <span>키 : {user.height}</span>
      <button>삭제</button>
    </div>
  );
}
