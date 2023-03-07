import React, { useContext, useState } from "react";
import Close from "../assets/icon-cross.svg";
import CheckIcon from "../assets/icon-check.svg";
import { TodoData } from "../App";

const Todo = ({id:index, isCompleted, text:task}) => {
  const { isDark, todoList, setTodoList} = useContext(TodoData);


  const style = {
    listStyle: isDark
      ? "bg-light-vlgb text-dark-vdb border-b-dark-lgb "
      : "bg-dark-vdsb text-light-lgb border-b-light-vdgb",
    divStyle: isCompleted
      ? "bg-gradient-to-r from-gradient-start to-gradient-end"
      : "",
    circle: isDark ? "border-light-vdgb" : "border-light-lgb",
    pStyle: isCompleted ? "line-through text-light-vdgb" : "",
  };
 
  return (
    <li
      className={`${style.listStyle} flex items-center group justify-between py-5  px-6 border-0 border-b 
       border-x-0 font-normal`}
    >
      <div
        className={`${style.divStyle} ${style.circle} w-[20px] h-[20px] border border-light-lgb 
        rounded-[50%] outline-none flex items-center justify-center cursor-pointer`}
        onClick={handleCompleted}
      >
        {isCompleted && <img src={CheckIcon} />}
      </div>

      <p className={`${style.pStyle} flex-1 ml-4 text-[18px] truncate`}>
        {task}
      </p>

      <img
        src={Close}
        className="invisible group-hover:visible cursor-pointer"
        onClick={handleDelete}
      />
    </li>
  );

  function handleDelete() {
    const newValue = todoList.filter((item) => item.id !== index);
    localStorage.setItem("todoList", JSON.stringify(newValue))
    setTodoList(newValue);
  }
  function handleCompleted(){
    const newValue = todoList.map((item) =>{ 
     return  item.id === index ? {...item, isCompleted : !isCompleted} : item;

    })
    localStorage.setItem("todoList", JSON.stringify(newValue))
    setTodoList(newValue);
  }

};

export default Todo;
