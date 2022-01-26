import "./App.css";

import { useEffect, useState } from "react";
import RetroApp from "./Components/RetroApp";
import ModernApp from "./Components/ModernApp";

function App() {
  const [theme, setTheme] = useState('retro');

  return theme === 'retro' ? <RetroApp upgradeTheme={setTheme} theme={theme}/> : <ModernApp downgradeTheme={setTheme} theme={theme}/>
  };

export default App;
