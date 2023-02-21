import React from "react";
import DetachedOther from "./DetachedOther";

const Other = ({ mode, setMode }) => {
  return (
    <div
      className={`flex justify-between text-dark-dgb   
      ${mode ? "bg-light-vlgb" : "bg-dark-vdsb"} 
      py-4 px-2 relative rounded-b-md`}
    >
      <p className="cursor-pointer">5 items left</p>
      <DetachedOther mode={mode} setMode={setMode} />
      <p className="cursor-pointer">Clear Completed</p>
    </div>
  );
};

export default Other;
