import React, { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };
  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <p>現在のカウント：{count}</p>
      <button onClick={countUp}>Up</button>
      <button onClick={countDown}>Down</button>
    </>
  );
};
