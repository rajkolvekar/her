import { useRef, useState } from 'react';

export default function MusicToggle() {
  const audio = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  function toggle() {
    if (!audio.current) return;

    if (playing) {
      audio.current.pause();
    } else {
      audio.current.play();
    }

    setPlaying(!playing);
  }

  return (
    <>
      <button className="music-btn" onClick={toggle}>
        {playing ? '🔊' : '🔇'}
      </button>

      <audio ref={audio} loop>
        <source
          src="https://res.cloudinary.com/vtzkbdrt/video/upload/v1786001648/background_zz3jos.mp3"
          type="audio/mpeg"
        />
      </audio>
    </>
  );
}
