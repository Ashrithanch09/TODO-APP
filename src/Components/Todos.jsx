import React, { useContext } from "react";
import { TodoData } from "../App";
import Todo from "./Todo";

const Todos = () => {
  const { todoList: list } = useContext(TodoData);


  return (
    <section>
      <ul className="rounded-tl-lg rounded-tr-lg  shadow-xl max-h-[408px] overflow-hidden hover:overflow-y-auto">
        {list.map((each) => <Todo {...each} key={each.id}/>)}
      </ul>
    </section>
  );
};

export default Todos;

