"use client";
import { scroll } from "framer-motion/dom";
import { useRef } from "react";

export default function VideoScroll() {
  //TODO make component sticky to top of a certain section on mobile, and stick to the right of screen on desktop
  // , also get height from section instead of whole page
  const video = useRef<HTMLVideoElement>(null);
  const section = useRef<HTMLElement>(null);

  video.current?.pause();

  scroll(
    (progress: number) => {
        console.log(progress)
      if (video.current && video.current.duration) {
        video.current.currentTime = video.current.duration * progress;
      }
    },
    // { source: section.current as Element },
  );

  return (
    <section ref={section} className="h-screen">
      <video
        ref={video}
        muted
        playsInline
        loop
        preload="true"
        src="https://framerusercontent.com/modules/assets/de1SZVgW6x8oriFKmGD2vCLl4M~QgE11NLqSikToAlO4zGwAzyGWgrXLn2cqTQMkVVJmig.mp4"
      ></video>
    </section>
  );
}
