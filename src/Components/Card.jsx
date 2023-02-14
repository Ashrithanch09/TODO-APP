import React from "react";
import Heading from "./Heading";
import Todos from "./Todos";
import CreateTodo from "./CreateTodo";
import Other from "./Other";
import Footer from "./Footer";

const Card = () => {
  return (
    <div className="max-w-lg m-auto py-10 px-7">
      <Heading />
      <CreateTodo />
      <Todos />
      <Other />
      <Footer />
    </div>
  );
};

export default Card;
