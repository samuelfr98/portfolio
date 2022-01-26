import { useState } from "react";

const UpgradeBox = ({ cancelled, upgrade }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="startUpdating">
      <div className="blueBar">
        <h1 className="upgradeTitle">Modern Website Theme Notification</h1>
      </div>
      <p>Upgrade to a modern theme?</p>
      <div className="updatingButtons">
        <button onClick={() => upgrade("modern")}>Ok</button>
        <button onClick={() => cancelled(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default UpgradeBox;
