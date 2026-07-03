import React, { useState } from "react";

const Form = () => {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
    city: "surat",
    skills: [],
  });
  const [error, setError] = useState({});

  const changeInputHanlder = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const addSkills = checked
        ? [...formData.skills, value]
        : formData.skills.filter((skill) => skill !== value);
      setFromData({ ...formData, skills: addSkills });
    } else {
      setFromData({ ...formData, [name]: value });
    }
  };

  const formValidation = () => {
    let error = {};

    if (formData.email.trim() === "") {
      error.email = "Email is require";
    }

    setError(error);
    return Object.keys(error).length === 0;
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (!formValidation()) return;

    
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
            value={formData.password}
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

        <div>
          <label>Skills</label>
          <div>
            <label htmlFor="html">HTML</label>
            <input
              type="checkbox"
              name="skills"
              id="html"
              value="html"
              onChange={changeInputHanlder}
              checked={formData.skills.includes("html")}
            />
          </div>
          <div>
            <label htmlFor="css">CSS</label>
            <input
              type="checkbox"
              name="skills"
              id="css"
              value="css"
              onChange={changeInputHanlder}
              checked={formData.skills.includes("css")}
            />
          </div>
          <div>
            <label htmlFor="js">JS</label>
            <input
              type="checkbox"
              name="skills"
              id="js"
              value="js"
              onChange={changeInputHanlder}
              checked={formData.skills.includes("js")}
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
      <p>{error.email}</p>
    </div>
  );
};

export default Form;
