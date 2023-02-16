import React from "react";
import DetachedOther from "./DetachedOther";

const Other = ({mode, setMode}) => {
  return (
    <div className={`flex justify-between text-dark-vdgb   ${mode ?  "bg-light-vlgb": "bg-dark-vdsb"}   py-4 px-4 relative rounded-b-md`}>
      <p>5 items left</p>
      <DetachedOther mode={mode} setMode={setMode}/>
      <p>Clear Completed</p>
    </div>
  );
};

export default Other;
