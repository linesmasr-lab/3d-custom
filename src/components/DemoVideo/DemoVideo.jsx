import { useEffect, useRef } from 'react';
import './DemoVideo.css';

// Demo video of a full BAS graphics package running in EcoStruxure.
// It loads nothing until it scrolls into view, then plays muted on a loop.
// Visitors can still use the controls (pause, full screen).
export const DEMO_VIDEO = '/media/ebo-demo.mp4';
export const DEMO_POSTER = '/media/ebo-demo-poster.webp';
export const LIGHT_VIDEO = '/media/ebo-light-demo.mp4';
export const LIGHT_POSTER = '/media/ebo-light-demo-poster.webp';

function DemoVideo({
  caption,
  className = '',
  src = DEMO_VIDEO,
  poster = DEMO_POSTER,
  label = 'Screen recording of a 3D BAS graphics package running in EcoStruxure Building Operation',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className={`demo-video ${className}`.trim()}>
      <div className="demo-video__frame">
        <video
          ref={ref}
          src={src}
          poster={poster}
          width="1280"
          height="720"
          muted
          loop
          playsInline
          controls
          preload="none"
          aria-label={label}
        />
      </div>
      {caption ? <figcaption className="caption demo-video__caption">{caption}</figcaption> : null}
    </figure>
  );
}

export default DemoVideo;
