import React, { useMemo, useState } from "react";

const Memo = () => {
  const [num, setNum] = useState(0);
  const [text, setText] = useState("");

  const numCalcu = useMemo(() => {
    console.log("NumCalcu fun caled");

    let a = 10;

    for (let i = 0; i < 100000; i++) {}

    return a * num;
  }, [num]);
  return (
    <div>
      <h1>Number: {numCalcu}</h1>
      <button onClick={(e) => setNum(num + 1)}>Click to calculate</button>

      <input
        type="text"
        value={text}
        name="text"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default Memo;
