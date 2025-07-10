import React, { useRef, useState } from 'react';
import videoSrc from '../assets/video1.mp4';

export default function Features() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-green-950/40 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-green-600">
        
        {/* Left: Styled Video Box */}
        <div className="w-full md:w-1/2">
          <div
            onClick={togglePlay}
            className="cursor-pointer rounded-3xl border-4 border-green-500 shadow-2xl transition hover:shadow-green-400/80 group relative overflow-hidden"
          >
            <video
              src={videoSrc}
              ref={videoRef}
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity duration-300"
            />
            {/* Optional: Overlay icon or text */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="text-white text-lg bg-green-600 px-4 py-2 rounded-full shadow-md">
                  ▶ Play
                </span>
              </div>
            )}
          </div>
          <p className="text-sm text-green-300 text-center mt-2">Click to {isPlaying ? 'Pause' : 'Play'} Video</p>
        </div>

        {/* Right: Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            MAKE YOUR WASTE TRACKING <br /> SMARTER & EASIER
          </h2>
          <p className="text-green-200 text-lg">
            TrashGo lets you assign tasks, notify staff, and track waste collection in real-time.
            With live maps and AI assistance, keep your city cleaner and your team efficient.
          </p>
        </div>
      </div>
    </div>
  );
}
