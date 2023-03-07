import { createContext, useEffect, useState } from "react";
import Card from "./Components/Card";
import "./App.css";

export const TodoData = createContext();

function App() {
  let localList = localStorage.getItem("todoList");
  let originalList = localList ? JSON.parse(localList) : []
  console.log(originalList)
  const [isDark, setIsDark] = useState(false);
  const [todoList, setTodoList] = useState(originalList);
    localStorage.setItem("todoList", JSON.stringify(todoList))
  


  let modes_Settings = {
    darkMode: `bg-mobile-darkBG bg-dark-vdb md:bg-desktop-darkBG dark`,
    lightMode: `bg-mobile-lightBG bg-light-vlgb md:bg-desktop-lightBG`,
  };

  let appSetting = isDark ? modes_Settings.lightMode : modes_Settings.darkMode;
  return (
    <div
      className={`min-h-screen w-full bg-no-repeat  bg-[length:100%_30%]  pt-1 ${appSetting}`}
    >
      <TodoData.Provider value={{ isDark, setIsDark, todoList, setTodoList, originalList }}>
        <Card />
      </TodoData.Provider>
    </div>
  );
}

export default App;
