import MapChart from "../Charts/ChoroplethChart";
import ChoroplethMap, { USPageMap } from "../Charts/ChoroplethChart";
import { RevenueDistributionChart } from "../Charts/RevenueDistributionChart";
import { Card, CardContent, CardHeader } from "../ui/card";
import DashboardLayout from "./DashboardLayout";
import { ArtistCard } from "./StreamAnalytics";

const topRevenueGeneratingSongs = [
  {
    song: "Blinding Lights",
    artist: "The Weeknd",
    revenue: 50000,
    image: "./the_weeknd.jpg",
  },
  {
    song: "Levitating",
    artist: "Dua Lipa",
    revenue: 45000,
    image: "./dua.jpg",
  },
];

const topRevenueGeneratingArtists = [
  { artist: "Ed Sheeran", revenue: 150000, image: "./ed.jpeg" },
  { artist: "Taylor Swift", revenue: 120000, image: "./taylor.png" },
];

const revenueData = {
  totalUsers: 1350000, // Total user base
  totalAggregate: 1731000, // Total revenue across all months
  projectedRevenue: 1800000, // Expected revenue for the year
  profit: 550000, // Total profit for the year in dollars
  profitMargin: ((550000 / 1731000) * 100).toFixed(2) + "%", // Profit margin calculation
  revenuePerUser: (1731000 / 1350000).toFixed(2), // Average revenue per user (ARPU)
  monthlyBreakdown: [
    {
      month: "January",
      subscriptions: 60000,
      ads: 25000,
      inAppPurchases: 4000,
      promotions: 8000,
      affiliateCommissions: 1500,
      totalRevenue: 98500,
    },
    {
      month: "February",
      subscriptions: 64000,
      ads: 27000,
      inAppPurchases: 4500,
      promotions: 10000,
      affiliateCommissions: 2000,
      totalRevenue: 107500,
    },
    {
      month: "March",
      subscriptions: 68000,
      ads: 29000,
      inAppPurchases: 5000,
      promotions: 11000,
      affiliateCommissions: 2200,
      totalRevenue: 115200,
    },
    {
      month: "April",
      subscriptions: 70000,
      ads: 32000,
      inAppPurchases: 5500,
      promotions: 12000,
      affiliateCommissions: 2500,
      totalRevenue: 127000,
    },
    {
      month: "May",
      subscriptions: 74000,
      ads: 33000,
      inAppPurchases: 6000,
      promotions: 13000,
      affiliateCommissions: 2700,
      totalRevenue: 128700,
    },
    {
      month: "June",
      subscriptions: 78000,
      ads: 35000,
      inAppPurchases: 6500,
      promotions: 14000,
      affiliateCommissions: 3000,
      totalRevenue: 136500,
    },
    {
      month: "July",
      subscriptions: 82000,
      ads: 38000,
      inAppPurchases: 7000,
      promotions: 15000,
      affiliateCommissions: 3500,
      totalRevenue: 145500,
    },
    {
      month: "August",
      subscriptions: 85000,
      ads: 40000,
      inAppPurchases: 7500,
      promotions: 16000,
      affiliateCommissions: 4000,
      totalRevenue: 157500,
    },
    {
      month: "September",
      subscriptions: 89000,
      ads: 42000,
      inAppPurchases: 8000,
      promotions: 17000,
      affiliateCommissions: 4500,
      totalRevenue: 170500,
    },
    {
      month: "October",
      subscriptions: 91000,
      ads: 44000,
      inAppPurchases: 8500,
      promotions: 18000,
      affiliateCommissions: 5000,
      totalRevenue: 181500,
    },
    {
      month: "November",
      subscriptions: 94000,
      ads: 45000,
      inAppPurchases: 9000,
      promotions: 20000,
      affiliateCommissions: 5500,
      totalRevenue: 193500,
    },
    {
      month: "December",
      subscriptions: 98000,
      ads: 46000,
      inAppPurchases: 10000,
      promotions: 22000,
      affiliateCommissions: 6000,
      totalRevenue: 203600,
    },
  ],
  topPerformingRegions: [
    { region: "North America", revenue: 450000 },
    { region: "Europe", revenue: 300000 },
    { region: "Asia", revenue: 200000 },
  ],
};

export function RevenueAnalytics() {
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
            <RevenueDistributionChart
              revenueData={revenueData.monthlyBreakdown}
            />
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
              {topRevenueGeneratingArtists.map((artist, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center md:flex-row gap-3 ml-4 my-2 w-full md:w-auto"
                >
                  <img
                    src={artist.image}
                    alt={artist.artist}
                    className="rounded-full w-16 h-16 object-cover"
                  />
                  <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold">{artist.artist}</h2>
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
                    alt={song.artist}
                    className="rounded-full w-16 h-16 object-cover"
                  />
                  <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold">{song.song}</h2>
                    <h2 className="text-sm font-semibold">{song.artist}</h2>
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
            <ChoroplethMap />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
