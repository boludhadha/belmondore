import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div>
      <h3>Video Playback</h3>
      <video src={videoUrl} controls style={{ width: '100%' }} />
    </div>
  );
};

export default VideoPlayer;
