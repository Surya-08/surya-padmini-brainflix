import React from "react";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/Icons/search.svg";
import upload from "../../assets/Icons/upload.svg";
import picture from "../../assets/images/Mohan-muruge.jpg";
import styles from "../../styles/partials/brain-flix.module.scss";

const Header = () => {
  return (
    <div className={styles.headerSection}>
      <div>
        <img src={logo} alt="brainflix-logo" className={styles.brainflixLogo} />
      </div>
      <div className={`${styles.container}`}>
        <div className={styles.headerform}>
          <img
            src={search}
            alt="search"
            className={`${styles.brainflixIcons} ${styles.searchIcon}`}
          />
          <input type="search" placeholder="Search" value="" />
        </div>
        <button type="submit" className={styles.upload}>
          <img
            src={upload}
            alt="upload Sign"
            className={styles.brainflixIcons}
          />
          UPLOAD
        </button>

        <img src={picture} alt="profile" className={styles.avatar} />
      </div>
    </div>
  );
};

export default Header;
