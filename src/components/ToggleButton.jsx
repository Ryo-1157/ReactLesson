import React, { useState, useEffect } from "react";

export const ToggleButton = () => {
  const [open, setOpen] = useState(false);

  const Toggle = () => {
    //これはreturnの省略記法
    setOpen((prevState) => !prevState);
  };

  useEffect(() => {
    //databaseの購読に関する処理
    console.log(`Current state is ${open}`);
    if (open) {
      console.log("Subscribe database...");
    }
    return () => {
      console.log("Unsubscribe database...");
    };
  });

  return <button onClick={Toggle}>{open ? "OPEN" : "CLOSE"}</button>;
};
