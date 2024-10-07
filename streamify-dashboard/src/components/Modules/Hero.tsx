import { useEffect, useState } from "react";
import SongThumbnailGrid from "./SongsThumbnailCard";
import TopMusicChart from "./TopMusicChart";
import { Song } from "@/lib/types";

export function Hero() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [trendingSongs, setTrendingSongs] = useState<Song[]>([]);

  useEffect(() => {
    // console.log("tarun at fetch");
    fetch("/api/top-songs")
      .then((response) => response.json())
      .then((data) => {
        // console.log("tarun data", data);
        setSongs(data.songs);
        setTrendingSongs(data.trendingSongs);
        // localStorage.setItem("topSongs", JSON.stringify(data.songs)); // Cache it
      })
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-auto ">
        <img
          src="./Screenshot.png"
          alt=""
          className="rounded-3xl  h-[50vh] w-full "
        />
        <SongThumbnailGrid songs={songs} />
      </div>
      <div className="w-full lg:w-[40%]">
        <TopMusicChart topSongs={trendingSongs} />
      </div>
    </div>
  );
}
