import React from "react";
import Heading from "./Heading";
import Todos from "./Todos";
import CreateTodo from "./CreateTodo";
import Other from "./Other";
import Footer from "./Footer";

const Card = ({ isDark, setIsDark }) => {
  return (
    <div className="max-w-3xl m-auto mt-14 py-10 px-7">
      <Heading isDark={isDark} setIsDark={setIsDark} />
      <CreateTodo isDark={isDark} setIsDark={setIsDark} />
      <Todos isDark={isDark} setIsDark={setIsDark} />
      <Other isDark={isDark} setIsDark={setIsDark} />
      <Footer />
    </div>
  );
};

export default Card;
