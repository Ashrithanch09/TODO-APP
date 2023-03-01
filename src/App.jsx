import { createContext, useState } from "react";
import Card from "./Components/Card";
import "./App.css";

export const DarkMode = createContext();

function App() {
  const [isDark, setIsDark] = useState(false);
  const [value, setValue] = useState([]);

  let modes_Settings = {
    darkMode: `bg-mobile-darkBG bg-dark-vdb md:bg-desktop-darkBG dark`,
    lightMode: `bg-mobile-lightBG bg-light-vlgb md:bg-desktop-lightBG`,
  };

  let appSetting = isDark ? modes_Settings.lightMode : modes_Settings.darkMode;
  return (
    <div
      className={`min-h-screen w-full bg-no-repeat  bg-[length:100%_30%]  pt-1 ${appSetting}`}
    >
      <DarkMode.Provider value={{ isDark, setIsDark, value, setValue }}>
        <Card />
      </DarkMode.Provider>
    </div>
  );
}

export default App;
