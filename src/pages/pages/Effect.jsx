import React, { useEffect, useState, version } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [tech, setTech] = useState({ name: "React", version: 20 });
  const [timer, setTimer] = useState(0);
  // console.log("Component Render");
  //   console.log(tech);

  function countFun() {
    console.log("Count Fun Call");
  }

  const countIncHandler = () => {
    setCount((pre) => pre + 1);
  };
  useEffect(() => {
    countFun();
    console.log("Effect render");
  }, [count]);

  useEffect(() => {
    setTech((pre) => ({ ...pre, version: 25 }));
  }, []);

  useEffect(() => {
    const timerFun = setInterval(() => {
      setTimer((pre) => pre + 1);
    }, 1000);

    return () => {
      clearInterval(timerFun);
    };
  }, []);
  return (
    <div>
      <h1>Timer: {timer}</h1>
      <h1>Count: {count}</h1>
      <button onClick={countIncHandler}>Count +</button>
    </div>
  );
};

export default Effect;
