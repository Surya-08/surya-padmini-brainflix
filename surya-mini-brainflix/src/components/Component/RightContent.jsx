import React from "react";
import styles from "../brain-flix.module.scss";

const RightContent = ({ handleNextVideo, filteredVideos }) => {
  return (
    <div>
      <div className={styles.nextVideos}>NEXT VIDEOS</div>
      {filteredVideos.map((video) => (
        <div
          key={video.id}
          style={{
            display: "flex",
            padding: "8px 12px",
          }}
        >
          <video
            poster={video.image}
            width={120}
            height={70}
            style={{
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              handleNextVideo(video.id);
            }}
          >
            <source src={video.video} type="video/mp4" />
          </video>
          <div
            style={{
              fontSize: "13px",
              paddingLeft: "8px",
              textAlign: "left",
              listStyle: "none",
              justifyContent: "space-between",
              margin: "0px",
            }}
          >
            <b style={{ textAlign: "start", lineHeight: "18px" }}>
              {video.title}
            </b>
            <p style={{ marginBottom: "0" }}>{video.channel}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightContent;
