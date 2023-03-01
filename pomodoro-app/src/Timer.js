import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./PauseButton.js";
import PlayButton from "./PlayButton.js";
import SettingsButton from './SettingsButton.js'

const red = "#f54e4e";
const green = "#4aec8c";

function Timer() {
  return (
    <div>
      <CircularProgressbar
        value={60}
        text={`60%`}
        styles={buildStyles({
          rotation: 1,
          strokeLinecap: 1,
          textColor: "fff",
          pathColor: red,
          trailColor: "rgba(255,255,255,.2",
        })}
      />
      <div style={{ marginTop: "20px" }}>
        <PlayButton />
        <PauseButton />
      </div>
      <div styles={{ marginTop: "20px;" }}>
        <SettingsButton />
      </div>
    </div>
  );
}

export default Timer;
