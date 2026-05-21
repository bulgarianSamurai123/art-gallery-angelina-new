import React from 'react'

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

      <div className="mt-4">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <p className="text-sm opacity-70">{project.client}</p>
        <p className="mt-2 text-sm">{project.description}</p>
      </div>
    </div>
  );
}

export default VideoPlayer
