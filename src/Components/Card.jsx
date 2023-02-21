import React from "react";
import Heading from "./Heading";
import Todos from "./Todos";
import CreateTodo from "./CreateTodo";
import Other from "./Other";
import Footer from "./Footer";

const Card = ({mode, setMode}) => {
  return (
    <div className="max-w-lg m-auto py-10 px-7 ">
      <Heading mode={mode} setMode={setMode}/>
      <CreateTodo mode={mode} setMode={setMode}/>
      <Todos mode={mode} setMode={setMode}/>
      <Other mode={mode} setMode={setMode} />
      <Footer  />
    </div>
  );
};

export default Card;
