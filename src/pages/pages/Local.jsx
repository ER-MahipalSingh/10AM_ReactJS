import React, { useEffect, useState } from "react";

const Local = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Jhon", age: 20 },
    { id: 2, name: "David", age: 20 },
  ]);
  // console.log(users);

  const updateUsersHandler = (id) => {
    setUsers((preUser) =>
      preUser.map((user) =>
        user.id === id ? { ...user, age: 25, name: "Ramesh" } : user,
      ),
    );
  };

  useEffect(() => {
    const setToLocal = localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>Name: {user.name}</h2>
          <h2>Name: {user.age}</h2>
          <button onClick={() => updateUsersHandler(user.id)}>
            Click to Update
          </button>
        </div>
      ))}
    </div>
  );
};

export default Local;
