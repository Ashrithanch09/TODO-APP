import React from "react";

const DetachedOther = ({mode, setMode}) => {
  let bg = `${mode ?  "bg-light-vlgb": "bg-dark-vdsb"}`;
  return (
    <div className={`flex top-20 left-0 right-0 absolute ml-0 justify-center ${bg} py-4 rounded-md b md:static md:py-0 md:ml-9 md:justify-between `}>
      <p className={`mr-4 hover: text-dark-vdb cursor-pointer`}> All</p>
      <p className="mr-4 hover: text-dark-vdb cursor-pointer">Active</p>
      <p className="mr-4 hover: text-dark-vdb cursor-pointer">Completed</p>
    </div>
  );
};

export default DetachedOther;
