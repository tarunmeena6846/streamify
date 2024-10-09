import { useEffect, useState } from "react";
// import ChoroplethMap from "../Charts/ChoroplethChart";
import { RevenueDistributionChart } from "../Charts/RevenueDistributionChart";
import { Card, CardContent, CardHeader } from "../ui/card";
import DashboardLayout from "./DashboardLayout";
import {
  MonthlyBreakdown,
  RevenueData,
  Song,
  StateRevenueType,
} from "@/lib/types";
import USChoroplethMap from "../Charts/ChoroplethChart";

export function RevenueAnalytics() {
  const [revenueData, setRevenueData] = useState<RevenueData>({
    totalAggregate: 0,
    projectedRevenue: 0,
    profit: 0,
    profitMargin: "0%",
    revenuePerUser: "0",
  });
  const [topRevenueGeneratingArtists, setTopRevenueGeneratingArtists] =
    useState<Song[]>([]);
  const [topRevenueGeneratingSongs, setTopRevenueGeneratingSongs] = useState<
    Song[]
  >([]);
  const [monthlyBreakdown, setMonthlyBreakdown] = useState<MonthlyBreakdown[]>(
    []
  );
  const [revenueByState, setRevenueByState] = useState<StateRevenueType[]>([]);

  useEffect(() => {
    fetch("/api/revenue-matrics")
      .then((response) => response.json())
      .then((data) => {
        console.log("tarun data here at ", data);
        setRevenueData(data.revenueData);
        setTopRevenueGeneratingArtists(data.topRevenueGeneratingArtists);
        setTopRevenueGeneratingSongs(data.topRevenueGeneratingSongs);
        setMonthlyBreakdown(data.monthlyBreakdown);
        setRevenueByState(data.revenueByState);
      })
      .catch((error) => console.error("Error fetching revenue data:", error));
  }, []);
  console.log(monthlyBreakdown);
  return (
    <DashboardLayout>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 ">
          {/* Total Revenue */}
          <Card className="col-span-1 md:col-span-2 md:row-span-1">
            <CardHeader className="text-xl font-bold">Total Revenue</CardHeader>
            <CardContent>
              ${revenueData.totalAggregate.toLocaleString()}
            </CardContent>
          </Card>

          {/* Projected Revenue */}
          <Card className="col-span-1 md:col-span-2 md:row-span-1">
            <CardHeader className="text-xl font-bold">
              Projected Revenue
            </CardHeader>
            <CardContent>
              ${revenueData.projectedRevenue.toLocaleString()}
            </CardContent>
          </Card>

          {/* Total Profit */}
          <Card className="md:col-span-2 row-span-1">
            <CardHeader className="text-xl font-bold">Total Profit</CardHeader>
            <CardContent>${revenueData.profit.toLocaleString()}</CardContent>
          </Card>

          {/* Revenue Distribution Chart */}
          <div className="col-span-1 row-span-2 md:col-span-4 md:row-span-2">
            {monthlyBreakdown.length != 0 && (
              <RevenueDistributionChart revenueData={monthlyBreakdown} />
            )}
          </div>

          {/* Profit Margin & Revenue Per User */}
          <Card className="md:col-span-2 md:row-span-1">
            <CardHeader className="text-xl font-bold">Profit Margin</CardHeader>
            <CardContent>{revenueData.profitMargin}</CardContent>
            <CardHeader className="text-xl font-bold mt-4">
              Revenue Per User
            </CardHeader>
            <CardContent>{revenueData.revenuePerUser}</CardContent>
          </Card>

          {/* Top Revenue Generating Artists */}
          <Card className="md:col-span-2 md:row-span-1">
            <CardHeader className="text-xl font-bold">
              Top Revenue Generating Artists
            </CardHeader>
            <div className="flex flex-wrap justify-between m-3">
              {topRevenueGeneratingArtists.map((artist: Song, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center md:flex-row gap-3 ml-4 my-2 w-full md:w-auto"
                >
                  <img
                    src={artist.image}
                    alt={artist.artist.name}
                    className="rounded-full w-16 h-16 object-cover"
                  />
                  <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold">
                      {artist.artist.name}
                    </h2>
                    <h2 className="text-sm text-gray-500">
                      ${artist.revenue.toLocaleString()}
                    </h2>
                  </div>
                </div>
              ))}
            </div>

            {/* Top Revenue Generating Songs */}
            <CardHeader className="text-xl font-bold">
              Top Revenue Generating Songs
            </CardHeader>
            <div className="flex flex-wrap justify-between m-3">
              {topRevenueGeneratingSongs.map((song, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center md:flex-row gap-3 ml-4 my-2 w-full md:w-auto"
                >
                  <img
                    src={song.image}
                    alt={song.artist.name}
                    className="rounded-full w-16 h-16 object-cover"
                  />
                  <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold">{song.title}</h2>
                    <h2 className="text-sm font-semibold">
                      {song.artist.name}
                    </h2>
                    <h2 className="text-sm text-gray-500">
                      ${song.revenue.toLocaleString()}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Choropleth Map */}
          <div className="col-span-1  md:col-span-6 md:row-span-2">
            {revenueByState.length != 0 && (
              <USChoroplethMap revenueByState={revenueByState} />
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
