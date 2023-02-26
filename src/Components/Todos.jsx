import React, { useContext } from "react";
import { DarkMode } from "../App";
import Todo from "./Todo";

const Todos = () => {
  const { value } = useContext(DarkMode);
  let list = value;

  return (
    <section>
      <ul className="overflow-x-hidden rounded-tl-lg rounded-tr-lg  shadow-xl max-h-[408px] overflow-y-auto">
        {list.map((each, index) => (
          <Todo task={each} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Todos;
