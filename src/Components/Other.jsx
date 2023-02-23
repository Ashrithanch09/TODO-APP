import React from "react";
import DetachedOther from "./DetachedOther";

const Other = ({ isDark, setIsDark }) => {
  return (
    <div
      className={`flex justify-between text-dark-dgb   
      ${isDark ? "bg-light-vlgb" : "bg-dark-vdsb"} 
      py-4 px-2 relative rounded-b-md`}
    >
      <p className="cursor-pointer" tabIndex={1}>5 items left</p>
      <DetachedOther isDark={isDark} setIsDark={setIsDark} />
      <button className="cursor-pointer" tabIndex={1}>Clear Completed</button>
    </div>
  );
};

export default Other;
