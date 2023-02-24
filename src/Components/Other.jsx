import React, { useContext } from "react";
import { DarkMode } from "../App";
import DetachedOther from "./DetachedOther";

const Other = () => {
  const {isDark} = useContext(DarkMode)
  const [divStyle] = [isDark ? "bg-light-vlgb" : "bg-dark-vdsb"];
  return (
    <div
      className={`flex justify-between text-dark-dgb py-4 px-7 relative rounded-b-md  shadow-xl ${divStyle}`}
    >
      <p className="cursor-pointer" tabIndex={1}>
        5 items left
      </p>

      <DetachedOther  />

      <button className="cursor-pointer" tabIndex={1}>
        Clear Completed
      </button>
    </div>
  );
};

export default Other;
