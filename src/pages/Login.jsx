import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/userSlice/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {  message, isAuth } = useSelector((state) => state.user);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setLoginForm((preForm) => ({
      ...loginForm,
      [e.target.name]: e.target.value,
    }));
  };

  const loginHanlder = (e) => {
    e.preventDefault();
    dispatch(login(loginForm));
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <form onSubmit={loginHanlder}>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            value={loginForm.email}
            onChange={inputHandler}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter password"
            name="password"
            value={loginForm.password}
            onChange={inputHandler}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
