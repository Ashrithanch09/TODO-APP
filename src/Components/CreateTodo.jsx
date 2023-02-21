import React, { useState } from "react";
import CheckIcon from "../assets/icon-check.svg";

const CreateTodo = ({ mode, setMode }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="my-5 ">
      {
        <li
          className={`flex items-center group justify-between
      ${mode ? "bg-light-vlgb" : "bg-dark-vdsb"}  border border-y-light-vdgb 
      border-x-0 text-light-lgb font-normal `}
        >
          <div
            className={`w-[20px] h-[20px] border border-light-vdgb rounded-[50%]
          outline-none flex items-center justify-center mx-5
         ${
           clicked ? "bg-gradient-to-r from-gradient-start to-gradient-end" : ""
         }`}
            onClick={() => setClicked(!clicked)}
          >
            {clicked && <img src={CheckIcon} />}
          </div>

          <input
            type="text"
            name=""
            id=""
            tabIndex={1}
            autoFocus
            className={`flex-1 ml-4 text-[18px]
       ${
         mode ? "bg-light-vlgb" : "bg-dark-vdsb"
       } py-5  px-6  w-4/5  focus:outline-none placeholder:text-xl placeholder:font-semibold placeholder:text-light-vdgb
       text-light-lgb font-normal`}
            placeholder="Create a new todo..."
          />
        </li>
      }
    </div>
  );
};

export default CreateTodo;
