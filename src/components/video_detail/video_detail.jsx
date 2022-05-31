import React from "react";
import styles from "./video_detail.module.css";

const Videodetail = ({ video, video: { snippet } }) => {
  return (
    <section className={styles.detail}>
      <iframe
        title="youtube video player"
        className={styles.video}
        id="ytplayer"
        type="text/html"
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default Videodetail;
