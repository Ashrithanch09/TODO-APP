import React, { useState } from "react";
import CheckIcon from "../assets/icon-check.svg";

const CreateTodo = () => {
  const [clicked, setClicked] = useState(false);
  return <div >
    { <li
      className={`flex items-center group justify-between
      bg-dark-vdsb  border border-y-light-vdgb 
      border-x-0 text-light-lgb font-normal `}
       >
        <div
        className={`w-[20px] h-[20px] border border-light-vdgb rounded-[50%]
          outline-none flex items-center justify-center
         ${
           clicked ? "bg-gradient-to-r from-gradient-start to-gradient-end" : ""
         }`}
         onClick={() => setClicked(!clicked)}
      >
        {clicked && <img src={CheckIcon} />}
      </div>
        <input type="text" name="" id=""  className={`
       bg-dark-vdsb py-5  px-6  w-full  active:border-0 placeholder:text-xl placeholder:font-semibold placeholder:text-light-vdgb
       text-light-lgb font-normal`} placeholder="Create a new todo..." />
   
    </li>}
 
  </div>;
};

export default CreateTodo;
