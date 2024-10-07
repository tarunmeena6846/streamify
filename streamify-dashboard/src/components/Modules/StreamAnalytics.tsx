import { Car, Heart, Play } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import DashboardLayout from "./DashboardLayout";
import { keyMetrics, topStreamedSongs } from "./Dashboard";
import { Button } from "../ui/button";
import { RecentStreamsTable } from "./RecentStreamTable";
import { Separator } from "../ui/separator";

export const ArtistCard = ({ artist }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={artist.image}
        alt={artist.name}
        className="rounded-full w-20 h-20 object-cover"
      />
      <h2 className="text-lg font-semibold mt-2">{artist.name}</h2>
      <h2 className="text-sm text-gray-500">{`(${artist.streams.toLocaleString()} streams)`}</h2>
    </div>
  );
};

const TopArtists = ({ artists }) => {
  return (
    <div className="cols-span-1 row-span-1 md:col-span-2 md:row-span-1 space-y-2 mt-4 ">
      <h2 className="text-xl font-bold mb-4 ">Monthly Top Artists</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {artists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
};

const SongCard = ({ title, artist, image, streams }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt={artist}
        className="rounded-full w-20 h-20 object-cover"
      />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <h2 className="text-sm text-gray-500">{`(${streams.toLocaleString()} streams)`}</h2>
    </div>
  );
};
const TopStreamedSongCard = ({ topStreamedSongs }) => {
  return (
    <div className="col-span-1 row-span-1 md:col-span-4 md:row-span-1 flex justify-center flex-col">
      <h2 className="text-xl font-bold mb-4">Top Streamed Songs</h2>
      <div className="flex justify-between pt-2 flex-wrap ">
        {topStreamedSongs.map((song, index) => (
          <SongCard
            key={index}
            title={song.title}
            artist={song.artist}
            image={song.image}
            streams={song.streams}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export function StreamAnalytics() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 grid-rows-5 md:grid-cols-6  gap-4">
        <div className="col-span-1 row-span-1 md:col-span-4 md:row-span-1 flex justify-between gap-4 bg-[#fbeceb] text-black  rounded-3xl">
          <div className="flex flex-col justify-center mx-6">
            <h2 className="text-sm">Mable</h2>
            <h2 className="font-bold text-3xl mb-6">Mad Love</h2>
            <h2 className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h2>
            <div className="flex flex-row mt-4 gap-2">
              <button className="flex gap-2 bg-[#e47e74] text-white  p-2 rounded-lg px-3">
                <Play className="" />
                Play Now
              </button>

              <button className="bg-[#e47e74]  text-white p-2 rounded-lg hover:bg-blue-700">
                <Heart />
              </button>
            </div>
          </div>
          <div className="flex items-end">
            <img src="./stream1.png" className=" "></img>
          </div>
        </div>
        <div className="col-span-1 row-span-1 md:col-span-2 md:row-span-2 ">
          <Card className="">
            <CardHeader className="text-xl font-bold">Total Streams</CardHeader>
            <CardContent>
              {keyMetrics.totalStreams.toLocaleString()}
            </CardContent>
          </Card>
          <TopArtists artists={keyMetrics.topArtist} />
        </div>
        <TopStreamedSongCard topStreamedSongs={topStreamedSongs} />
        <RecentStreamsTable />
      </div>
    </DashboardLayout>
  );
}
