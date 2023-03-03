import React, { useContext } from "react";
import { TodoData } from "../App";
import DetachedOther from "./DetachedOther";

const Other = () => {
  const {isDark, todoList} = useContext(TodoData)
  const [divStyle] = [isDark ? "bg-light-vlgb" : "bg-dark-vdsb"];
  return (
    <div
      className={`flex justify-between text-dark-dgb py-4 px-7 relative rounded-b-md  shadow-xl ${divStyle}`}
    >
      <p className="cursor-default" tabIndex={1}>
        {todoList.length} items left
      </p>

      <DetachedOther  />

      <button className="cursor-pointer" tabIndex={1}>
        Clear Completed
      </button>
    </div>
  );
};

export default Other;
