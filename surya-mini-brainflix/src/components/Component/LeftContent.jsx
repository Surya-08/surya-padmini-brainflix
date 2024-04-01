import React from "react";
import styles from "../brain-flix.module.scss";
import view from "../../assets/Icons/views.svg";
import addComment from "../../assets/Icons/add_comment.svg";
import favIcon from "../../assets/Icons/likes.svg";
import picture from "../../assets/images/Mohan-muruge.jpg";

const LeftContent = ({ currentValue }) => {
  //Convert timestamp to Date object and Format the date using date-fns
  const { format } = require("date-fns");
  const formattedDate = (element) => {
    const date = new Date(element);
    const result = format(date, "MM/dd/yyyy");
    return result;
  };

  return (
    <div className={styles.contentLeft}>
      <div className={styles.brainflixHeader}>{currentValue.title}</div>
      <div className={styles.channelDetails}>
        <div className={styles.channelAuthor}>
          <div>
            <b className={styles.primaryText} style={{ paddingRight: "25px" }}>
              By {currentValue.channel}{" "}
            </b>
          </div>
          <div>{formattedDate(currentValue.timestamp)}</div>
        </div>
        <div className={styles.viewSection}>
          <div>
            <img
              className={styles.brainflixIcons}
              src={view}
              alt="viewed"
              width={15}
              height={16}
              style={{ color: "#AFAFAF" }}
            />
            {currentValue.views}
          </div>
          <div>
            <img
              src={favIcon}
              alt="favourite"
              width={14}
              height={14}
              className={styles.brainflixIcons}
            />
            {currentValue.likes}
          </div>
        </div>
      </div>

      <div className={styles.descriptionPadding}>
        {currentValue.description}
      </div>
      <div>
        <b className={styles.primaryText}>
          {currentValue.comments.length} Comments
        </b>
      </div>
      <div className={styles.commentSection}>
        <div className={styles.verticalALignCenter}>
          <img
            src={picture}
            alt="profile"
            className={`${styles.avatar} ${styles.brainflixIcons}`}
          />
        </div>
        <div className={styles.commentBox}>
          <div className={styles.joinConvo}>JOIN THE CONVERSATION</div>
          <input
            type="text"
            id="comment"
            placeholder="Add a new comment"
            value=""
            onChange={(e) => e.target.value}
            className={`${styles.addComment} ${styles.addCommentInput}`}
          />
        </div>
        <div className={styles.verticalALignCenter}>
          <button
            type="submit"
            className={styles.upload}
            style={{ marginTop: "10px" }}
          >
            <img
              src={addComment}
              alt="addComment Sign"
              className={styles.brainflixIcons}
            />
            COMMENT
          </button>
        </div>
      </div>
      {currentValue.comments.length > 0 &&
        currentValue.comments.map((elem) => (
          <div
            key={elem.name}
            className={styles.descriptionPadding}
            style={{ borderTop: "1px solid #e1e1e1" }}
          >
            <div className={styles.verticalALignCenter}>
              <img
                style={{ backgroundColor: "#E1E1E1" }}
                src="#E1E1E1"
                alt=""
                className={styles.avatar}
              />
            </div>
            <div style={{ padding: "16px" }}>
              <div className={styles.channelAuthor}>
                <span style={{ paddingRight: "20px" }}>
                  <b>{elem.name}</b>
                </span>
                <span className={styles.joinConvo}>
                  {formattedDate(elem.timestamp)}
                </span>
              </div>
              <div>{elem.comment}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LeftContent;
