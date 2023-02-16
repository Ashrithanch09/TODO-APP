import Card from "./Components/Card";
import "./App.css";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(false);

  return (
    <div
      className={` min-h-screen w-full bg-hero-pattern bg-no-repeat bg-[length:100%_30%] ${mode ? "bg-light-vlgb" : "bg-dark-vdb"}`}
    >
      <Card mode={mode} setMode={setMode}/>
    </div>
  );
}

export default App;
