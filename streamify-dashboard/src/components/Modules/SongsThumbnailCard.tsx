import React from "react";
import { MusicPlayerBar } from "./MusicPlayer";

const SongThumbnailCard = ({ song }) => {
  return (
    <div className="flex flex-col items-center w-40 ">
      {/* Album Cover */}
      <div className="shadow-lg ">
        <img src={song.image} alt={song.title} className="h-40  rounded-2xl" />
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
};

const SongThumbnailGrid = () => {
  const songs = [
    {
      title: "Vocal Studies and Uprock Narratives",
      artist: "Prefuse 73",
      image: "./image4.png",
      time: "03:37",
    },
    {
      title: "Temples",
      artist: "Lone",
      image: "./image1.jpg",
      time: "04:45",
    },
    {
      title: "Earth Tones",
      artist: "Lenzman",
      image: "./iimage2.jpg",
      time: "03:23",
    },
    {
      title: "Kollections 06",
      artist: "VA",
      image: "./image3.jpeg",
      time: "05:12",
    },
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      image: "./image5.jpg",
      time: "03:20",
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      image: "./image6.jpg",
      time: "03:23",
    },
    {
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      image: "./image7.jpg",
      time: "02:58",
    },
    {
      title: "Peaches",
      artist: "Justin Bieber",
      image: "./image8.jpg",
      time: "03:18",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      {/* Thumbnail Grid */}
      <h2 className="text-white text-xl mb-4">Top Albums</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {songs.map((song, index) => (
          <>
            <SongThumbnailCard key={index} song={song} />
            <MusicPlayerBar key={index} currentSong={song} />
          </>
        ))}
      </div>
    </div>
  );
};

export default SongThumbnailGrid;
