import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => videoRef.current.play();
  const handlePause = () => videoRef.current.pause();
  const handleForward = () => (videoRef.current.currentTime += 5);
  const handleRewind = () => (videoRef.current.currentTime -= 5);

  return (
    <div style={{ textAlign: "center" }}>
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        width="600"
        controls={false}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handlePlay}>▶️ Play</button>
        <button onClick={handlePause}>⏸ Pause</button>
        <button onClick={handleForward}>⏩ Forward</button>
        <button onClick={handleRewind}>⏪ Rewind</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
