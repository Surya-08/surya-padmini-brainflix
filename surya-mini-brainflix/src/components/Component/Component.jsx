import React, { useRef, useState } from "react";
import styles from "../brain-flix.module.scss";
import videosList from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import play from "../../assets/Icons/play.svg";
import pause from "../../assets/Icons/pause.svg";
import fullscreen from "../../assets/Icons/fullscreen.svg";
import volumeUp from "../../assets/Icons/volume_up.svg";
import PlaySlider from "./PlaySlider";

const Component = () => {
  const videoControl = useRef(null);
  const [videos, setVideos] = useState([]);
  const [playPosition, setPlayPosition] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);
  const filterVideos = videosList.filter((item) => item.id !== currentVideo.id);

  const handleCurrentVideo = (videoId) => {
    const selectedVideo = videoDetails.find((video) => video.id === videoId);

    setCurrentVideo(selectedVideo);
    setVideos(videos.filter((video) => video.id !== videoId));
  };

  const togglePlayPause = () => {
    const element = videoControl.current;
    if (element.paused) {
      element.play();
      setVideoPlaying((prev) => !prev);
    } else {
      setVideoPlaying((prev) => !prev);
    }
  };

  const handleSliderChange = (newValue) => {
    setPlayPosition(newValue);
  };
  return (
    <div>
      {currentVideo && (
        <div className={styles.videoContainer}>
          <div>
            <video
              ref={videoControl}
              className={`${styles.videoAspect}`}
              aria-controls="custom-video-controls"
              autoPlay
              onClick={togglePlayPause}
              poster={currentVideo.image}
            >
              <source src={currentVideo.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            id="custom-video-controls"
            className={styles.controlsDiv}
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <span className={styles.customVideoControls}>
              {videoPlaying ? (
                <img src={play} alt="play" onclick={togglePlayPause} />
              ) : (
                <img src={pause} alt="Pause" onclick={togglePlayPause} />
              )}
            </span>
            <PlaySlider
              playPosition={playPosition}
              handleSliderChange={handleSliderChange}
            />
            <span>
              <div
                style={{ display: "flex" }}
                className={styles.customVideoControls}
              >
                <div>
                  <img src={fullscreen} alt="fullscreen" />
                </div>
                <div>
                  <img src={volumeUp} alt="volumeUp" />
                </div>
              </div>
            </span>
          </div>
        </div>
      )}

      <div className={styles.secondContainer}>
        <LeftContent currentValue={currentVideo} />
        <RightContent
          handleNextVideo={handleCurrentVideo}
          filteredVideos={filterVideos}
        />
      </div>
    </div>
  );
};

export default Component;
