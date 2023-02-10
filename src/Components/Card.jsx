import React from "react";
import Heading from "./Heading";
import Todos from "./Todos";
import CreateTodo from "./CreateTodo";
import WeirdName from "./WeirdName";

const Card = () => {
  return (
    <div className="max-w-lg m-auto py-10 px-7">
      <Heading />
      <CreateTodo />
      <Todos />
      <WeirdName />
    </div>
  );
};

export default Card;
