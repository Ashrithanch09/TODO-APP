import React, { useContext } from "react";
import { DarkMode } from "../App";
import Todo from "./Todo";

const Todos = () => {
  const { value: list } = useContext(DarkMode);

  return (
    <section>
      <ul className="rounded-tl-lg rounded-tr-lg  shadow-xl max-h-[408px] overflow-hidden hover:overflow-y-auto">
        {list.map((each) => (
          <Todo task={each.text} key={each.id} index={each.id} />
        ))}
      </ul>
    </section>
  );
};

export default Todos;
