import { useEffect } from "react";

const BackgroundVideo = () => {
  useEffect(() => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      iframe.style.pointerEvents = "none";
    }
  }, []);

  return (
    <div className="video-background fixed inset-0 z-0 w-full h-full">
      <iframe
        src="https://www.youtube.com/embed/w-kGEVrWw7A?autoplay=1&mute=1&loop=1&playlist=w-kGEVrWw7A&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&autohide=1"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="zoomed-video w-full h-full object-cover"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
