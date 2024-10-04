import { Car, Heart, Play } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import DashboardLayout from "./DashboardLayout";
import { keyMetrics, topStreamedSongs } from "./Dashboard";
import { Button } from "../ui/button";
import { RecentStreamsTable } from "./RecentStreamTable";
import { Separator } from "../ui/separator";

const ArtistCard = ({ artist }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <img
        src={artist.image}
        alt={artist.name}
        className="rounded-full w-20 h-20 object-cover"
      />
      <h2 className="text-lg font-semibold">{artist.name}</h2>
      <h2 className="text-sm text-gray-500">{`(${artist.streams} streams)`}</h2>
    </div>
  );
};

const TopArtists = ({ artists }) => {
  return (
    <div className="col-span-2 row-span-3 space-y-2">
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
    <div className="flex flex-col items-center space-y-2">
      <img
        src={image}
        alt={artist}
        className="rounded-full w-20 h-20 object-cover"
      />
      <h2 className="text-lg font-semibold">{title}</h2>
      <h2 className="text-sm text-gray-500">{`(${streams} streams)`}</h2>
    </div>
  );
};
const TopStreamedSongCard = ({ topStreamedSongs }) => {
  return (
    <div className="col-span-4 row-span-1">
      {/* <div className=" shadow-md rounded-lg p-4"> */}
      <h2 className="text-xl font-bold mb-4">Top Streamed Songs</h2>
      <div className="flex justify-between pt-2">
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
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-row-6 gap-4">
        <div className="col-span-4 flex  justify-between gap-4 bg-[#fbeceb] text-black row-span-3 rounded-3xl">
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
            <img src="./stream1.png" className="rounded-"></img>
          </div>
        </div>
        <Card className="col-span-2 row-span-1">
          <CardHeader className="text-xl font-bold">Total Streams </CardHeader>
          <CardContent>{keyMetrics.totalStreams}</CardContent>
        </Card>
        {/* <div className="col-span-2 row-span-1">
          <h2 className="text-xl mb-4 font-bold">Most Searched Song</h2>
          <div className="flex flex-row gap-2 pt-2 ">
            {keyMetrics.mostSearchedSongs.map((song, index) => (
              <SongCard
                key={index}
                title={song.title}
                artist={song.artist}
                image={song.image}
                streams={song.streams}
              />
            ))}
          </div>
        </div> */}
        <TopArtists artists={keyMetrics.topArtist} />
        {/* <div className="col-span-4 row-span-1">
          <CardHeader>Top Streamed Song</CardHeader>
          <CardContent>
            {topStreamedSongs.map((s, index) => (
              <div key={index}>{s.title}</div>
            ))}
          </CardContent>
        </div> */}
        <TopStreamedSongCard topStreamedSongs={topStreamedSongs} />
        {/* <div className="col-span-2 row-span-1">
          <h2 className="text-xl mb-4 font-bold">Most Searched Song</h2>
          <div className="flex flex-row gap-2 pt-2">
            {keyMetrics.mostSearchedSongs.map((song, index) => (
              <SongCard
                key={index}
                title={song.title}
                artist={song.artist}
                image={song.image}
                streams={song.streams}
              />
            ))}
          </div>
        </div> */}
        {/* <Separator className="col-span-6" /> */}
        {/* <div className=""> */}
        <RecentStreamsTable />
        {/* </div> */}
      </div>
    </DashboardLayout>
  );
}
