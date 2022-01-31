import { useState } from "react";
import "../RetroApp.css";

const UpgradeBox = ({ cancelled, upgrade }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onOkClick = () => {
    setIsLoading(true);
    setTimeout(() => upgrade("modern"), 5000);
  };

  return (
    <div className="startUpdating">
      <div className="blueBar">
        <h1 className="upgradeTitle">Modern Website Theme Notification</h1>
      </div>

      {!isLoading ? (
        <>
          <p>Upgrade to a modern theme?</p>
          <div className="updatingButtons">
            <button onClick={onOkClick}>Ok</button>
            <button onClick={() => cancelled(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <p>Modernizing...</p>
          <div className="progressBar">
            <div className="growingBar"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default UpgradeBox;
