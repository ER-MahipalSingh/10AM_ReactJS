import React, { useState } from "react";

const Form = () => {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
    city: "surat",
  });

  const changeInputHanlder = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          <label>Emial</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="email"
            onChange={changeInputHanlder}
            value={formData.email}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="password"
            onChange={changeInputHanlder}
          />
        </div>

        <div>
          <select name="city" onChange={changeInputHanlder}>
            <label>City</label>
            <option value="surat">Surat</option>
            <option value="rajkot">Rajkot</option>
            <option value="jamnagar">Jamnagar</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
