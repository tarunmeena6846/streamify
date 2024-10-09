import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"; // Use appropriate icons from Lucide
import { Song } from "@/lib/types";

export const MusicPlayerBar = ({ currentSong }: { currentSong: Song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(currentSong);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white py-2 px-3 shadow-lg z-50 flex justify-between items-center">
      {/* Song Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg overflow-hidden">
          <img
            src={currentSong.image}
            alt={currentSong.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">{currentSong.title}</span>
          <span className="text-sm text-gray-400">
            {currentSong.artist.name}
          </span>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex items-center gap-6">
        <button
          className="text-white hover:text-yellow-400"
          onClick={() => console.log("Previous Song")}
        >
          <SkipBack size={24} />
        </button>
        <button
          className="bg-yellow-400 p-3 rounded-full flex items-center justify-center"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button
          className="text-white hover:text-yellow-400"
          onClick={() => console.log("Next Song")}
        >
          <SkipForward size={24} />
        </button>
      </div>

      {/* Song Duration */}
      <div className="text-gray-400 text-sm">
        <span>0:00</span> / <span>{currentSong.time}</span>
      </div>
    </div>
  );
};
