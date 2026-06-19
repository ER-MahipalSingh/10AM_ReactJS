import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  // let name = "Jhon"
  const [name, setName] = useState("Rames");

  const loginHandler = () => {
    console.log("Login Done");
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <Child name={name} />
      <User name={name} />
      <Login lable="Login" onClick={loginHandler} type="submit" />
    </div>
  );
};

const User = ({ name }) => {
  return (
    <div>
      <h1>User Function</h1>
      <h2>Name: {name}</h2>
    </div>
  );
};

const Login = ({ lable, ...other }) => {
  console.log({ ...other });

  return (
    <div>
      <h1>Login Function</h1>
      <button {...other}>{lable}</button>
    </div>
  );
};

export default Parent;
