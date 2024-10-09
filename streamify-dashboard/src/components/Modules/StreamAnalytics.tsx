import { Car, Heart, Play } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import DashboardLayout from "./DashboardLayout";
import { RecentStreamsTable } from "./RecentStreamTable";
import { useEffect, useState } from "react";
import { Artist, Song } from "@/lib/types";

export const ArtistCard = ({ artist }: { artist: Artist }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={artist.image}
        alt={artist.name}
        className="rounded-full w-20 h-20 object-cover"
      />
      <h2 className="text-lg font-semibold mt-2 ">{artist.name}</h2>
      <h2 className="text-sm text-gray-500">{`(${artist.streamCount.toLocaleString()} streams)`}</h2>
    </div>
  );
};

const TopArtists = ({ artists }: { artists: Song[] }) => {
  console.log("tarun artist", artists);
  return (
    <div className="space-y-2 mt-4 ">
      <h2 className="text-xl font-bold mb-4 ">Monthly Top Artists</h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {artists.map((artist, index) => (
          <ArtistCard key={index} artist={artist.artist} />
        ))}
      </div>
    </div>
  );
};

const SongCard = ({
  title,
  artist,
  image,
  streams,
}: {
  title: string;
  artist: Artist;
  image: string;
  streams: number;
}) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={image}
        alt={artist.name}
        className="rounded-full w-20 h-20 object-cover"
      />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <h2 className="text-sm text-gray-500">{`(${streams.toLocaleString()} streams)`}</h2>
    </div>
  );
};
const TopStreamedSongCard = ({
  topStreamedSongs,
}: {
  topStreamedSongs: Song[];
}) => {
  return (
    <div className="order-4 md:order-none md:col-span-4 flex justify-center flex-col">
      <h2 className="text-xl font-bold mb-4">Most Searched Songs</h2>
      <div className="flex justify-between pt-2 flex-wrap ">
        {topStreamedSongs.map((song, index) => (
          <SongCard
            key={index}
            title={song.title}
            artist={song.artist}
            image={song.image}
            streams={song.streamCount}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export function StreamAnalytics() {
  const [topArtists, setTopArtists] = useState([]);
  const [recentStreams, setRecentStreams] = useState([]);
  const [totalStreams, setTotalStreams] = useState(0);
  const [mostSearchedSongs, setMostSearchedSongs] = useState([]);
  useEffect(() => {
    fetch("/api/stream-matrics")
      .then((res) => res.json())
      .then((data) => {
        console.log("tarun data at recent", data);
        setTopArtists(data.topArtist);
        setRecentStreams(data.recentStreams);
        setTotalStreams(data.totalStreams);
        setMostSearchedSongs(data.mostSearchedSongs);
      });
  }, []);
  return (
    <DashboardLayout>
      <div className="grid gap-4 grid-cols-1 w-full md:grid-cols-6 ">
        {/* Hero section */}
        <div className="order-1 md:order-none col-span-1 md:col-span-4 bg-[#fbeceb] text-black rounded-3xl flex flex-col md:flex-row justify-between overflow-hidden">
          <div className="flex flex-col justify-center p-6 w-full md:w-1/4">
            <h2 className="text-sm">Mable</h2>
            <h2 className="font-bold text-3xl mb-6">Mad Love</h2>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex mt-4 gap-2">
              <button className="flex gap-2 bg-[#e47e74] text-white p-2 rounded-lg items-center">
                <Play />
                Play Now
              </button>
              <button className="bg-[#e47e74] text-white p-2 rounded-lg">
                <Heart />
              </button>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <img
              src="./stream1.png"
              alt="Stream"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Total Streams */}

        <div className="order-3 md:order-none col-span-1 md:col-span-2">
          <TopArtists artists={topArtists} />
        </div>
        <div className="order-2 md:order-none col-span-1 md:col-span-2 ">
          <Card className="h-full">
            <CardHeader className="text-xl font-bold">Total Streams</CardHeader>
            <CardContent>{totalStreams.toLocaleString()}</CardContent>
          </Card>
        </div>
        <TopStreamedSongCard topStreamedSongs={mostSearchedSongs} />
        {/* Recent Streams Table */}

        <RecentStreamsTable recentStreams={recentStreams} />
      </div>
    </DashboardLayout>
  );
}
