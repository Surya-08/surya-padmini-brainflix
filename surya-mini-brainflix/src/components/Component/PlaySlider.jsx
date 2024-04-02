import React from "react";
import styles from "../brain-flix.module.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PlaySlider = ({ playPosition, handleSliderChange }) => {
  return (
    <div
      className={`${styles.customSlider} ${styles.customVideoControls}`}
      style={{ width: "100%" }}
    >
      <Slider
        min={0}
        max={100}
        value={playPosition}
        onChange={handleSliderChange}
        styles={{
          track: { background: "#0095ff", height: 3 },
          rail: { background: "#000000", height: 3 },
          handle: {
            border: "white",
            borderWidth: 0.5,
            height: 15,
            width: 15,
            marginTop: -5.5,
            background: "white",
            outline: "none",
            cursor: "pointer",
            opacity: "initial",
          },
        }}
      />
      <span style={{ fontSize: "12px", color: "white", padding: "0 5px" }}>
        0:00/4:01
      </span>
    </div>
  );
};

export default PlaySlider;
