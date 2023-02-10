import React from "react";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";

const Heading = () => {
  return (
    <div className=" flex justify-between items-center font-bold mb-5">
      <p className="text-3xl tracking-widest uppercase text-light-vlg ">Todo</p>
      <img src={Sun} className="w-8" />
    </div>
  );
};

export default Heading;
