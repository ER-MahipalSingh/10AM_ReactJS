import React, { useState } from "react";

const Hookes = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  // console.log(count);

  const countIncHandler = () => {
    setCount((pre) => pre + 1);
  };

  const countDecHandler = () => {
    if (count === 0) return;
    setCount((pre) => pre - 1);
  };

  const changeDarkMode = () => {
    setDarkMode((pre) => !pre);
  };

  const darkBackground = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
  };

  return (
    <div style={darkBackground}>
      <h2>Count: {count}</h2>
      <button onClick={countIncHandler}>Count +</button>
      <button onClick={countDecHandler}>Count -</button>
      <button onClick={changeDarkMode}>Dark Mode</button>
    </div>
  );
};

export default Hookes;
