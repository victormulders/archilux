"use client";
import { scroll } from "framer-motion/dom";
import { useRef } from "react";

export default function VideoScroll() {
  //TODO make component sticky to top of a certain section on mobile, and stick to the right of screen on desktop
  // , also get height from section instead of whole page
  const video = useRef<HTMLVideoElement>(null);

  video.current?.pause();

  scroll((progress: number) => {
    if (video.current && video.current.duration) {
      video.current.currentTime = video.current.duration * progress;
    }
  });

  return (
    <video
      className="rounded-lg"
      ref={video}
      muted
      playsInline
      loop
      preload="true"
      src="https://videos.pexels.com/video-files/3015493/3015493-sd_640_360_24fps.mp4"
    ></video>
  );
}
