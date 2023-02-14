import React from "react";

const DetachedOther = () => {
  return (
    <div className="flex top-20 left-0 right-0 absolute ml-0 justify-center py-4 rounded-md bg-dark-vdsb md:static md:py-0 md:ml-9 md:justify-between ">
      <p className="mr-4"> All</p>
      <p className="mr-4">Active</p>
      <p className="mr-4">Completed</p>
    </div>
  );
};

export default DetachedOther;
