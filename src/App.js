//import "./RetroApp.css";

import { useEffect, useState } from "react";
import RetroApp from "./Components/RetroApp";
import ModernApp from "./Components/ModernApp";
import Amplify from "@aws-amplify/core";
import { isMobile } from "react-device-detect";
import MobileModernApp from "./Components/Mobile/MobileModernApp";

function App() {
  const [theme, setTheme] = useState("modern");

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  var rendering = ''

  if (isMobile) {
    rendering = (theme === "retro") ? <RetroApp upgradeTheme={setTheme} theme={theme} /> : <MobileModernApp downgradeTheme={setTheme} theme={theme} />
  }
  else {
    rendering = theme === "retro" ? <RetroApp upgradeTheme={setTheme} theme={theme} /> :<ModernApp downgradeTheme={setTheme} theme={theme} />
  }

  return rendering
}

export default App;
