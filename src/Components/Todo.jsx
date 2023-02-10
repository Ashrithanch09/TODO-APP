import React, { useState } from "react";
import Close from "../assets/icon-cross.svg";
import CheckIcon from "../assets/icon-check.svg";

const Todo = ({ task }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <li
      className={`flex items-center group justify-between
       bg-dark-vdsb py-5  px-6 border border-y-light-vdgb 
       border-x-0 text-light-lgb font-normal`}
      onClick={() => setClicked(!clicked)}
    >
      <div
        className={`w-[20px] h-[20px] border border-light-vdgb rounded-[50%]
         outline-none flex items-center justify-center
         ${
           clicked ? "bg-gradient-to-r from-gradient-start to-gradient-end" : ""
         }`}
      >
        {clicked && <img src={CheckIcon} />}
      </div>
      <p
        className={`flex-1 ml-4 text-[18px] ${
          clicked ? "line-through text-light-vdgb" : ""
        }`}
      >
        {task}
      </p>
      <img src={Close} className="invisible group-hover:visible" />
    </li>
  );
};

export default Todo;
