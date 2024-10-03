import { Car, Heart, Play } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import DashboardLayout from "./DashboardLayout";
import { keyMetrics, topStreamedSongs } from "./Dashboard";
import { Button } from "../ui/button";
export function StreamAnalytics() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-row-6 gap-4">
        <div className="col-span-4 flex  justify-between gap-4 bg-[#fbeceb] text-black row-span-2 rounded-3xl">
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

        <Card className="col-span-2 ">
          <CardHeader>Total Streams</CardHeader>
          <CardContent>{keyMetrics.totalStreams}</CardContent>
        </Card>
        <Card className="col-span-2 ">
          <CardHeader>Top Artist</CardHeader>
          <CardContent>
            {keyMetrics.topArtist.name}

            {` (${keyMetrics.topArtist.streams} streams)`}
          </CardContent>
        </Card>
        <Card className="col-span-2 ">
          <CardHeader>Most Searched Song</CardHeader>
          <CardContent>
            <h2>{keyMetrics.mostSearchedSong.title}</h2>
            <h2>{`(${keyMetrics.mostSearchedSong.artist})`}</h2>
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>Top Streamed Song</CardHeader>
          <CardContent>
            {topStreamedSongs.map((s, index) => (
              <div key={index}>{s.title}</div>
            ))}
          </CardContent>
          {/* <CardContent>{keyMetrics.newUsers}</CardContent> */}
        </Card>
        {/* <Card className="col-span-6 ">

        </Card> */}
      </div>
    </DashboardLayout>
  );
}
