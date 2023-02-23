import React from "react";
import Todo from "./Todo";

const Todos = ({ isDark, setIsDark }) => {
  const list = [
    "Complete Online Javascript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries",
    "Complete Todo App on Frontend Mentor",
  ];
  return (
    <section>
      <ul className="overflow-hidden rounded-tl-lg rounded-tr-lg  shadow-xl  ">
        {list.map((each, index) => (
          <Todo task={each} key={index} isDark={isDark} setIsDark={setIsDark} />
        ))}
      </ul>
    </section>
  );
};

export default Todos;
