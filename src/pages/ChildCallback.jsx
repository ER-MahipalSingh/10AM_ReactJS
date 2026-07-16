import React, { memo, useState } from "react";

const ChildCallback = ({ onClick, count }) => {
  const [text, setText] = useState("");

  console.log("Child render");

  return (
    <div>
      <h2>Count from child: {count}</h2>
      <button onClick={onClick}>From child Click +</button>

      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        name="text"
        value={text}
      />
    </div>
  );
};

export default memo(ChildCallback);
