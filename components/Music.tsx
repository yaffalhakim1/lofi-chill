import { useState } from "react";
import { Range } from "react-range";
import Image from "next/image";

interface MusicPlayerProps {
  shadowClass?: string;
  imageSrc?: string;
  musicSrc?: string;
}

const MusicPlayer = (
  props: MusicPlayerProps = {
    shadowClass: "shadow-xl shadow-cyan-500/50",
    imageSrc: "/images/lofi1.jpg",
    musicSrc: "/music/lofi1.mp3",
  }
) => {
  const [volume, setVolume] = useState(0.5); // Initial volume value
  const [isPlaying, setIsPlaying] = useState(false); // Track if the music is currently playing
  const [showRange, setShowRange] = useState(false); // Track the visibility of the range component
  const [isClicked, setIsClicked] = useState(false); // Track if the image is clicked

  let audio: HTMLAudioElement | null = null;

  const handleVolumeChange = (values: number[]) => {
    const newVolume = values[0];
    setVolume(newVolume);
    if (audio) {
      audio.volume = newVolume;
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      if (audio) {
        audio.pause();
      }
    } else {
      if (audio) {
        audio.play();
      }
    }
    setIsPlaying(!isPlaying); // Toggle the playing status
  };

  const handleImageClick = () => {
    handlePlayPause();
    setIsClicked((prevIsClicked) => !prevIsClicked);
    setShowRange(!showRange); // Toggle the visibility of the range component
  };

  return (
    <div className="flex items-center container">
      <div className="relative ">
        <Image
          src={props.imageSrc ?? "/images/lofi1.jpg"}
          alt="Music Player"
          className={` cursor-pointer  rounded-lg ${
            isClicked ? `scale-[105%] duration-300 ${props.shadowClass}` : ""
          } `}
          onClick={handleImageClick}
          width={300}
          height={300}
        />
        {showRange && (
          <div className="absolute bottom-0 left-0 w-full px-5 mb-4">
            <Range
              min={0}
              max={1}
              step={0.01}
              values={[volume]}
              onChange={handleVolumeChange}
              renderTrack={({ props, children }) => (
                <div {...props} className="h-2 bg-gray-300 rounded-full">
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="w-4 h-4 bg-gray-600 rounded-full cursor-grab"
                />
              )}
            />
          </div>
        )}
      </div>
      <audio
        ref={(el) => (audio = el)}
        src={props.musicSrc} // Replace with the actual path to your audio file
      />
    </div>
  );
};

export default MusicPlayer;

// Music by <a href="https://pixabay.com/users/lofi_hour-28600719/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=117209">Lofi_hour</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=117209">Pixabay</a> -> rain
