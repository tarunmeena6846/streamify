import SongThumbnailGrid from "./SongsThumbnailCard";
import TopMusicChart from "./TopMusicChart";

export function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-auto ">
        <img
          src="./Screenshot.png"
          alt=""
          className="rounded-3xl  h-[50vh] w-full "
        />
        <SongThumbnailGrid />
      </div>
      <div className="w-full lg:w-[40%]">
        <TopMusicChart />
      </div>
    </div>
  );
}
