import React, { useState } from "react";

const DetachedOther = ({ mode, setMode }) => {
  const [activeButton, setActiveButton] = useState("all");
  let bg = `${mode ? "bg-light-vlgb" : "bg-dark-vdsb"}`;
  return (
    <div
      className={`flex justify-center absolute top-20 left-0 right-0  ml-0  ${bg} py-4 rounded-md b md:static md:py-0 md:ml-9 md:justify-between `}
    >
      <p
        className={`mr-4 cursor-pointer 
        ${activeButton === "all" ? "text-brightBlue" : "text-dark-dgb"} 
        `}
      >
        All
      </p>
      <p
        className={`mr-4 cursor-pointer  
        ${activeButton === "active" ? "text-brightBlue" : "text-dark-dgb"} 
        `}
      >
        Active
      </p>
      <p
        className={`mr-4  cursor-pointer 
        ${activeButton === "completed" ? "text-brightBlue" : "text-dark-dgb"}
        `}
      >
        Completed
      </p>
    </div>
  );
};

export default DetachedOther;
