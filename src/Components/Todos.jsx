import React, { useContext } from "react";
import { DarkMode } from "../App";
import Todo from "./Todo";

const Todos = () => {
  const {value} = useContext(DarkMode)
  const list = value;
  // const list = [
  //   "Complete Online Javascript course",
  //   "Jog around the park 3x",
  //   "10 minutes meditation",
  //   "Read for 1 hour",
  //   "Pick up groceries",
  //   "Complete Todo App on Frontend Mentor",
  // ];

  return (
    <section>
      <ul className="overflow-hidden rounded-tl-lg rounded-tr-lg  shadow-xl">
        {list.map((each, index) => (
          <Todo task={each} key={index}  />
        ))}
      </ul>
    </section>
  );
};

export default Todos;
