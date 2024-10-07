import { Song } from "@/lib/types";
import { Play } from "lucide-react";

const TopMusicChart = ({ topSongs }: { topSongs: Song[] }) => {
  // console.log("tarun topSongs");
  return (
    <div className="bg-transparent w-full px-2 mb-[100px]">
      {/* Card Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Now Trendings
        </h3>
      </div>

      {/* List of Top Songs */}
      <ul className="">
        {topSongs.map((song, index) => (
          <SongListCard key={index} song={song} />
        ))}
      </ul>
    </div>
  );
};

export default TopMusicChart;

const SongListCard = ({ song }: { song: Song }) => {
  return (
    <div className="relative bg-black dark:bg-white rounded-3xl flex flex-row items-center mb-4">
      <div className="bg-white dark:bg-black rounded-r-3xl shadow-xl flex items-center justify-between p-4 w-[90%]">
        {/* Play Button */}
        <div className="flex items-center">
          <button className="w-8 h-8 bg-yellow-400 text-white rounded-full flex items-center justify-center mr-4">
            <Play className="w-4 h-4" />
          </button>

          {/* Song Info */}
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800 dark:text-white">
              {song.title}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {song.artist}
            </span>
          </div>
        </div>

        {/* Song Duration */}
        <span className="text-gray-700 dark:text-gray-300">{song.time}</span>

        {/* Menu Dots */}
      </div>
      <button className=" ml-4 text-white dark:text-black text-2xl ">:</button>
    </div>
  );
};
