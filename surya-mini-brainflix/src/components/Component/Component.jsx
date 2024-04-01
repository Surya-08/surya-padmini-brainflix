import React, { useState } from "react";
import styles from "../brain-flix.module.scss";
import videosList from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Component = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);
  const filterVideos = videosList.filter((item) => item.id !== currentVideo.id);

  const handleCurrentVideo = (videoId) => {
    const selectedVideo = videoDetails.find((video) => video.id === videoId);

    setCurrentVideo(selectedVideo);
    setVideos(videos.filter((video) => video.id !== videoId));
  };

  return (
    <div>
      {currentVideo && (
        <div className={styles.videoContainer}>
          <video
            controls={true}
            className={`${styles.videoAspect}`}
            autoPlay
            poster={currentVideo.image}
          >
            <source src={currentVideo.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
