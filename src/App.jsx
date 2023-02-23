import { useState } from "react";
import Card from "./Components/Card";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  let modes_Settings = {
    darkMode: `bg-mobile-darkBG bg-dark-vdb md:bg-desktop-darkBG`,
    lightMode: `bg-mobile-lightBG bg-light-vlgb md:bg-desktop-lightBG`,
  };

  let appSetting = isDark ? modes_Settings.lightMode : modes_Settings.darkMode;
  return (
    <div

      className={`min-h-screen w-full bg-no-repeat  bg-[length:100%_30%] ${appSetting}`}

    >
      <Card isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
}

export default App;
