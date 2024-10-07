import React, { useCallback, useState } from "react";
import { MusicPlayerBar } from "./MusicPlayer";
import { Song } from "@/lib/types";

const SongThumbnailCard = React.memo(
  ({ song, onClick }: { song: Song; onClick: (song: Song) => void }) => {
    console.log("tarun Rendering SongThumbnailCard for:", song.title);

    return (
      <div className="flex flex-col items-center" onClick={() => onClick(song)}>
        {/* Album Cover */}
        <div className="shadow-lg">
          <img src={song.image} alt={song.title} className="h-40 rounded-2xl" />
        </div>

        {/* Song Info */}
        <div className="mt-2 text-center">
          <p className="text-black dark:text-white text-sm font-semibold truncate w-full">
            {song.title.length > 20
              ? `${song.title.slice(0, 20)}...`
              : song.title}
          </p>
          <p className="text-gray-400 text-xs truncate">{song.artist}</p>
        </div>
      </div>
    );
  }
);

const SongThumbnailGrid = React.memo(({ songs }: { songs: Song[] }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const handleSongClick = useCallback((selectedSong: Song) => {
    console.log("tarun Song clicked:", selectedSong);

    setCurrentSong(selectedSong);
  }, []);
  return (
    <div className="container mx-auto py-6">
      {/* Thumbnail Grid */}
      <h2 className="text-white text-xl mb-4">Top Albums</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
        {songs.map((song, index) => (
          <SongThumbnailCard
            key={index}
            song={song}
            onClick={handleSongClick}
          />
        ))}
      </div>

      {/* Music Player */}
      {currentSong && <MusicPlayerBar currentSong={currentSong} />}
    </div>
  );
});

export default SongThumbnailGrid;
