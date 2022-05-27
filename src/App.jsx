import styles from "./app.module.css";
import React, { useEffect, useRef, useState } from "react";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";

function App() {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&q=${query}&key=AIzaSyDqHr4xkHDfzqAVXL1gERdf67TlG-VvI9o`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => {
        setVideos(items);
        console.log(videos);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&q=&key=AIzaSyDqHr4xkHDfzqAVXL1gERdf67TlG-VvI9o`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
        console.log(videos);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <div className={styles.app}>
        <SearchHeader onSearch={search} />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;
