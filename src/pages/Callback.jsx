import React, { useCallback, useState } from "react";
import ChildCallback from "./ChildCallback";

const Callback = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("Prent render");

  const incCount = useCallback(() => {
    setCount((preCount) => preCount + 1);
  }, [text]);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={incCount}>Click +</button>

      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        name="text"
        value={text}
      />

      <ChildCallback onClick={incCount} count={count} />
    </div>
  );
};

export default Callback;
