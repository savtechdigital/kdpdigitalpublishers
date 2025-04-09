import { createContext, useContext, useCallback } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const handleVideoPlay = useCallback((currentVideo) => {
    document.querySelectorAll('video').forEach(video => {
      if (video !== currentVideo && !video.paused) {
        video.pause();
        
      }
    });
  }, []);

  return (
    <VideoContext.Provider value={{ handleVideoPlay }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
}; 