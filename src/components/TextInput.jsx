import React, { useState } from "react";

export const TextInput = () => {
  const [name, setName] = useState("");

  const handleName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  return (
    // inputタグは原則onChange！！じゃないとレンダリングされないからね。
    <input type={"text"} onChange={(event) => handleName(event)} value={name} />
  );
};
