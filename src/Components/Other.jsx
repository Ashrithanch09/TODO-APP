import React from "react";
import DetachedOther from "./DetachedOther";

const Other = () => {
  return (
    <div className="flex justify-between text-dark-dgb bg-dark-vdsb py-4 px-4 relative rounded-b-md">
      <p>5 items left</p>
      <DetachedOther />
      <p>Clear Completed</p>
    </div>
  );
};

export default Other;
