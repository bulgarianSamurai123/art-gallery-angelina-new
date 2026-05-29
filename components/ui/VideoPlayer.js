import React from "react";

const VideoPlayer = ({ project }) => {

  return (
    <div className="project-card">
      <video
        src={project.videoUrl}
        controls
        preload="metadata"
        playsInline
        className="w-full rounded-xl"
      />
    </div>
  );
};

export default VideoPlayer;
