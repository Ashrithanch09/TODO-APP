import React, { useContext, useState } from "react";
import { TodoData } from "../App";
import CheckIcon from "../assets/icon-check.svg";

const CreateTodo = () => {
  const { isDark, todoList, setTodoList } = useContext(TodoData);
  const [init, setInit] = useState("");

  const style = {
    containerDivStyle: isDark ? "bg-light-vlg" : " bg-dark-vdsb",

    roundedDivStyle: init
      ? "bg-gradient-to-r from-gradient-start to-gradient-end"
      : "",

    inputStyle: isDark ? "bg-light-vlg" : "bg-dark-vdsb",
  };

  const handleKeyDown = (event) => {
    if (init && event.key === "Enter") {
      const obj = {
        id: todoList.length + 1,
        text: init,
        isCompleted: false,
      };

      setTodoList((prev) => [obj, ...prev]);
      setInit("");
    }
  };
  return (
    <div
      className={`${style.containerDivStyle} my-8 rounded-md border-none outline-none flex gap-6 py-5`}
    >
      <div
        className={`${style.roundedDivStyle} w-[20px] h-[20px] border border-light-vdgb rounded-[50%] outline-none flex items-center justify-center ml-5 cursor-pointer`}
      >
        {init && <img src={CheckIcon} />}
      </div>

      <input
        type="text"
        tabIndex={1}
        autoFocus
        className={`${style.inputStyle} flex-1 text-[18px] rounded-md w-4/5  focus:outline-none placeholder:text-xl placeholder:font-semibold placeholder:text-light-vdgb
       text-light-lgb font-normal`}
        placeholder="Create a new todo..."
        value={init}
        onChange={(e) => setInit(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default CreateTodo;
