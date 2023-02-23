import React from "react";
import DetachedOther from "./DetachedOther";

const Other = ({ isDark, setIsDark }) => {
  const [divStyle] = [isDark ? "bg-light-vlgb" : "bg-dark-vdsb"];
  return (
    <div
      className={`flex justify-between text-dark-dgb py-4 px-2 relative rounded-b-md  shadow-xl ${divStyle}`}
    >
      <p className="cursor-pointer" tabIndex={1}>
        5 items left
      </p>

      <DetachedOther isDark={isDark} setIsDark={setIsDark} />

      <button className="cursor-pointer" tabIndex={1}>
        Clear Completed
      </button>
    </div>
  );
};

export default Other;
