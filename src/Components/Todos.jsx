import React from "react";
import Todo from "./Todo";

const Todos = () => {
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
      <ul className="overflow-hidden rounded-tl-lg rounded-tr-lg ">
        {list.map((each, index) => (
          <Todo task={each} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Todos;
