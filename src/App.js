//import "./RetroApp.css";

import { useEffect, useState } from "react";
import RetroApp from "./Components/RetroApp";
import ModernApp from "./Components/ModernApp";

function App() {
  const [theme, setTheme] = useState('modern');

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (theme === 'retro') ? <RetroApp upgradeTheme={setTheme} theme={theme}/> : <ModernApp downgradeTheme={setTheme} theme={theme}/>
  //return <ModernApp />
};

export default App;
