import { createServer } from "miragejs";
import { Song } from "./lib/types";

const songData: Song[] = [
  {
    id: "song_001",
    title: "Vocal Studies and Uprock Narratives",
    artist: {
      name: "Prefuse 73",
      image: "./image4.png",
      streamCount: 1000,
      revenue: 50000,
    },
    image: "./image4.png",
    time: "03:37",
    streamCount: 5000,
    userId: "user_002",
    date: "2024-09-28",
    search: 4000,
    revenue: 50000,
  },
  {
    id: "song_002",
    title: "Temples",
    artist: {
      name: "Lone",
      image: "./image1.jpg",
      streamCount: 1000,
      revenue: 60000,
    },
    image: "./image1.jpg",
    time: "04:45",
    streamCount: 6000,
    userId: "user_002",
    date: "2024-09-28",
    search: 6000,
    revenue: 10000,
  },
  {
    id: "song_003",
    title: "Earth Tones",
    artist: {
      name: "Lenzman",
      image: "./iimage2.jpg",
      streamCount: 6000,
      revenue: 150000,
    },
    image: "./iimage2.jpg",
    time: "03:23",
    streamCount: 7000,
    userId: "user_002",
    date: "2024-09-28",
    revenue: 50000,
    search: 8000,
  },
  {
    id: "song_004",
    title: "Kollections 06",
    artist: {
      name: "VA",
      image: "./image3.jpeg",
      streamCount: 6020,
      revenue: 15010,
    },
    image: "./image3.jpeg",
    time: "05:12",
    streamCount: 6500,
    userId: "user_002",
    date: "2024-09-28",
    search: 7000,
    revenue: 50000,
  },
  {
    id: "song_005",
    title: "Blinding Lights",
    artist: {
      name: "The Weeknd",
      image: "./image5.jpg",
      streamCount: 2010,
      revenue: 1500,
    },
    image: "./image5.jpg",
    time: "03:20",
    streamCount: 2500,
    userId: "user_002",
    date: "2024-09-28",
    revenue: 50000,
    search: 10000,
  },
  {
    id: "song_006",
    title: "Levitating",
    artist: {
      name: "Dua Lipa",
      image: "./dua.jpg",
      streamCount: 60230,
      revenue: 11100,
    },
    image: "./dua.jpg",
    time: "03:23",
    streamCount: 7300,
    userId: "user_003",
    date: "2024-09-27",
    revenue: 60000,
    search: 8000,
  },
  {
    id: "song_007",
    title: "Good 4 U",
    artist: {
      name: "Olivia Rodrigo",
      image: "./image7.jpg",
      streamCount: 2200,
      revenue: 4500,
    },
    image: "./image7.jpg",
    time: "02:58",
    streamCount: 7100,
    userId: "user_006",
    date: "2024-09-24",
    revenue: 80000,
    search: 18000,
  },
  {
    id: "song_008",
    title: "Peaches",
    artist: {
      name: "Justin Bieber",
      image: "./image8.jpg",
      streamCount: 65600,
      revenue: 12100,
    },
    image: "./image8.jpg",
    time: "03:18",
    streamCount: 8800,
    userId: "user_008",
    date: "2024-09-22",
    revenue: 90000,
    search: 20000,
  },
  {
    id: "song_009",
    title: "Watermelon Sugar",
    artist: {
      name: "Harry Styles",
      image: "./harry.jpeg",
      streamCount: 60430,
      revenue: 1110,
    },
    image: "./harry.jpeg",
    time: "03:21",
    streamCount: 1800,
    userId: "user_004",
    date: "2024-09-26",
    revenue: 100000,
    search: 30000,
  },
  {
    id: "song_010",
    title: "Shape of You",
    artist: {
      name: "Ed Sheeran",
      image: "./ed.jpeg",
      streamCount: 60220,
      revenue: 15110,
    },
    image: "./ed.jpeg",
    time: "03:53",
    streamCount: 3000,
    userId: "user_005",
    date: "2024-09-25",
    search: 12000,
    revenue: 50000,
  },
  {
    id: "song_011",
    title: "Stay",
    artist: {
      name: "The Kid LAROI & Justin Bieber",
      image: "./image11.jpg",
      streamCount: 610,
      revenue: 15200,
    },
    image: "./image11.jpg",
    time: "02:21",
    streamCount: 3200,
    userId: "user_007",
    date: "2024-09-23",
    revenue: 6000,
    search: 15000,
  },
  {
    id: "song_012",
    title: "drivers license",
    artist: {
      name: "Olivia Rodrigo",
      image: "./olivia.jpeg",
      streamCount: 61230,
      revenue: 152010,
    },
    image: "./olivia.jpeg",
    time: "04:02",
    streamCount: 2700,
    userId: "user_009",
    date: "2024-09-21",
    search: 11000,
    revenue: 70000,
  },
  {
    id: "song_013",
    title: "Save Your Tears",
    artist: {
      name: "The Weeknd",
      image: "./the_weeknd.jpg",
      streamCount: 5610,
      revenue: 5200,
    },
    image: "./the_weeknd.jpg",
    time: "03:35",
    streamCount: 8900,
    userId: "user_010",
    date: "2024-09-20",
    revenue: 90000,
    search: 13000,
  },
  {
    id: "song_014",
    title: "Deja Vu",
    artist: {
      name: "Olivia Rodrigo",
      image: "./image14.jpg",
      streamCount: 6108,
      revenue: 1520,
    },
    image: "./image14.jpg",
    time: "03:35",
    streamCount: 2200,
    userId: "user_011",
    date: "2024-09-19",
    search: 10000,
    revenue: 70000,
  },
  {
    id: "song_015",
    title: "Montero (Call Me By Your Name)",
    artist: {
      name: "Lil Nas X",
      image: "./lil.jpg",
      streamCount: 61098,
      revenue: 15210,
    },
    image: "./lil.jpg",
    time: "02:17",
    streamCount: 3400,
    userId: "user_012",
    date: "2024-09-18",
    search: 6000,
    revenue: 7000,
  },
  {
    id: "song_016",
    title: "Butter",
    artist: {
      name: "BTS",
      image: "./bts.jpeg",
      streamCount: 6108,
      revenue: 1210,
    },
    image: "./bts.jpeg",
    time: "02:44",
    streamCount: 4500,
    userId: "user_013",
    date: "2024-09-17",
    revenue: 160000,
    search: 13000,
  },
  {
    id: "song_017",
    title: "Kiss Me More",
    artist: {
      name: "Doja Cat ft. SZA",
      image: "./doza.jpeg",
      streamCount: 6098,
      revenue: 10980,
    },
    image: "./doza.jpeg",
    time: "03:28",
    streamCount: 2600,
    userId: "user_014",
    date: "2024-09-16",
    search: 50000,
    revenue: 90000,
  },
  {
    id: "song_018",
    title: "Levitating (feat. DaBaby)",
    artist: {
      name: "Dua Lipa",
      image: "./dua.jpg",
      streamCount: 6128,
      revenue: 10090,
    },
    image: "./dua.jpg",
    time: "03:23",
    streamCount: 3500,
    userId: "user_015",
    date: "2024-09-15",
    revenue: 120000,
    search: 10000,
  },
  {
    id: "song_019",
    title: "Mad Love",
    artist: {
      name: "Mabel",
      image: "./mable.jpg",
      streamCount: 1128,
      revenue: 1009,
    },
    image: "./mable.jpg",
    time: "02:49",
    streamCount: 1500,
    userId: "user_001",
    date: "2024-09-29",
    search: 18000,
    revenue: 50000,
  },
];

export const userGrowthData = [
  { month: "Jan", totalUsers: 800000, activeUsers: 600000 },
  { month: "Feb", totalUsers: 850000, activeUsers: 650000 },
  { month: "Mar", totalUsers: 900000, activeUsers: 700000 },
  { month: "Apr", totalUsers: 950000, activeUsers: 725000 },
  { month: "May", totalUsers: 1000000, activeUsers: 750000 },
  { month: "Jun", totalUsers: 1050000, activeUsers: 780000 },
  { month: "Jul", totalUsers: 1100000, activeUsers: 800000 },
  { month: "Aug", totalUsers: 1150000, activeUsers: 820000 },
  { month: "Sep", totalUsers: 1200000, activeUsers: 850000 },
  { month: "Oct", totalUsers: 1250000, activeUsers: 880000 },
  { month: "Nov", totalUsers: 1300000, activeUsers: 900000 },
  { month: "Dec", totalUsers: 1350000, activeUsers: 950000 },
];

export const keyMetrics = {
  totalUsers: 1350000,
  activeUsers: 950000,
  newUsers: 50000,
  totalStreams: 1250000,
};

const revenueData = {
  totalAggregate: 1731000,
  projectedRevenue: 1800000,
  profit: 550000,
  profitMargin: ((550000 / 1731000) * 100).toFixed(2) + "%",
  revenuePerUser: (1731000 / 1350000).toFixed(2),
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

const revenueByState = [
  { id: "01", state: "Alabama", revenue: 34399 },
  { id: "02", state: "Alaska", revenue: 67122 },
  { id: "04", state: "Arizona", revenue: 65444 },
  { id: "05", state: "Arkansas", revenue: 50719 },
  { id: "06", state: "California", revenue: 76945 },
  { id: "08", state: "Colorado", revenue: 50719 },
  { id: "09", state: "Connecticut", revenue: 57268 },
  { id: "10", state: "Delaware", revenue: 67122 },
  { id: "12", state: "Florida", revenue: 45894 },
  { id: "13", state: "Georgia", revenue: 52429 },
  { id: "15", state: "Hawaii", revenue: 49009 },
  { id: "16", state: "Idaho", revenue: 52429 },
  { id: "17", state: "Illinois", revenue: 67122 },
  { id: "18", state: "Indiana", revenue: 54039 },
  { id: "19", state: "Iowa", revenue: 42679 },
  { id: "20", state: "Kansas", revenue: 44389 },
  { id: "21", state: "Kentucky", revenue: 65444 },
  { id: "22", state: "Louisiana", revenue: 57268 },
  { id: "23", state: "Maine", revenue: 44389 },
  { id: "24", state: "Maryland", revenue: 31269 },
  { id: "25", state: "Massachusetts", revenue: 45894 },
  { id: "26", state: "Michigan", revenue: 60688 },
  { id: "27", state: "Minnesota", revenue: 47604 },
  { id: "28", state: "Mississippi", revenue: 52429 },
  { id: "29", state: "Missouri", revenue: 40969 },
  { id: "30", state: "Montana", revenue: 45894 },
  { id: "31", state: "Nebraska", revenue: 34399 },
  { id: "32", state: "Nevada", revenue: 88401 },
  { id: "33", state: "New Hampshire", revenue: 34399 },
  { id: "34", state: "New Jersey", revenue: 71970 },
  { id: "35", state: "New Mexico", revenue: 62128 },
  { id: "36", state: "New York", revenue: 62128 },
  { id: "37", state: "North Carolina", revenue: 57268 },
  { id: "38", state: "North Dakota", revenue: 31269 },
  { id: "39", state: "Ohio", revenue: 55728 },
  { id: "40", state: "Oklahoma", revenue: 52429 },
  { id: "41", state: "Oregon", revenue: 59009 },
  { id: "42", state: "Pennsylvania", revenue: 55728 },
  { id: "44", state: "Rhode Island", revenue: 44389 },
  { id: "45", state: "South Carolina", revenue: 50719 },
  { id: "46", state: "South Dakota", revenue: 32709 },
  { id: "47", state: "Tennessee", revenue: 52429 },
  { id: "48", state: "Texas", revenue: 67122 },
  { id: "49", state: "Utah", revenue: 37634 },
  { id: "50", state: "Vermont", revenue: 32709 },
  { id: "51", state: "Virginia", revenue: 44389 },
  { id: "53", state: "Washington", revenue: 60688 },
  { id: "54", state: "West Virginia", revenue: 65444 },
  { id: "55", state: "Wisconsin", revenue: 52429 },
  { id: "56", state: "Wyoming", revenue: 54039 },
];

function getRandomSongs(songs: Song[], count = 5) {
  const shuffled = songs.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

async function getTopArtists(songs: Song[], count = 6) {
  const topArtists = songs
    .sort((a, b) => b.artist.streamCount - a.artist.streamCount)
    .slice(0, count);

  return topArtists;
}
export function makeServer() {
  createServer({
    routes() {
      this.get("/api/hello", () => {
        return { message: "Hello World!" };
      });
      this.get("/api/top-songs", () => {
        const randomSongs = getRandomSongs(songData);

        return {
          songs: songData
            .sort((a, b) => b.streamCount - a.streamCount)
            .slice(0, 8),
          trendingSongs: randomSongs,
        };
      });

      this.get("/api/key-matrics", () => {
        return {
          keyMetrics: {
            totalUsers: keyMetrics.totalUsers,
            activeUsers: keyMetrics.activeUsers,
            newUsers: keyMetrics.newUsers,
          },
          userGrowthData: userGrowthData,
        };
      });

      this.get("/api/stream-matrics", async () => {
        return {
          totalStreams: keyMetrics.totalStreams,
          topArtist: await getTopArtists(songData),
          mostSearchedSongs: songData
            .sort((a, b) => b.search - a.search)
            .slice(0, 5),
          recentStreams: songData,
        };
      });

      this.get("/api/revenue-matrics", async () => {
        return {
          revenueData: {
            totalAggregate: revenueData.totalAggregate,
            projectedRevenue: revenueData.projectedRevenue,
            profit: revenueData.profit,
            profitMargin: revenueData.profitMargin,
            revenuePerUser: revenueData.revenuePerUser,
          },
          topRevenueGeneratingArtists: songData
            .sort((a, b) => b.artist.revenue - a.artist.revenue)
            .slice(0, 2),
          revenueByState: revenueByState,
          topRevenueGeneratingSongs: songData
            .sort((a, b) => b.revenue - a.revenue)
            .slice(0, 2),
          monthlyBreakdown: revenueData.monthlyBreakdown,
        };
      });
      this.passthrough();
      this.passthrough("https://cdn.jsdelivr.net/**");
    },
  });
}
