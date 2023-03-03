import React, { useContext, useState } from "react";
import { TodoData } from "../App";

const DetachedOther = () => {
  const {isDark} = useContext(TodoData)
  const [activeButton, setActiveButton] = useState("all");
  const contents = ["all", "active", "completed"];

  let bg = isDark ? "bg-light-vlgb" : "bg-dark-vdsb";

  const activeColor = (content) =>
    activeButton === content ? "text-brightBlue" : "text-dark-dgb";

  return (
    <div
      className={` ${bg} flex justify-center absolute top-20 left-0 right-0  ml-0   py-4 rounded-md shadow-2xl md:static md:py-0 md:ml-9 md:justify-between `}
    >
      {contents.map((content) => (
        <p
          key={content}
          tabIndex={1}
          className={`mr-4 cursor-pointer ${activeColor(content)}`}
          onClick={() => setActiveButton(content)}
        >
          {content[0].toUpperCase() + content.slice(1)}
        </p>
      ))}
    </div>
  );
};

export default DetachedOther;
