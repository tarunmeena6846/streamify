import { createServer } from "miragejs";
import { Song } from "./lib/types";
const songData = [
  {
    title: "Vocal Studies and Uprock Narratives",
    artist: "Prefuse 73",
    image: "./image4.png",
    time: "03:37",
    streamCount: 5000,
    userId: "user_002",
    date: "2024-09-28",
  },
  {
    title: "Temples",
    artist: "Lone",
    image: "./image1.jpg",
    time: "04:45",
    streamCount: 6000,
    userId: "user_002",
    date: "2024-09-28",
  },
  {
    title: "Earth Tones",
    artist: "Lenzman",
    image: "./iimage2.jpg",
    time: "03:23",
    streamCount: 7000,
    userId: "user_002",
    date: "2024-09-28",
  },
  {
    title: "Kollections 06",
    artist: "VA",
    image: "./image3.jpeg",
    time: "05:12",
    streamCount: 6500,
    userId: "user_002",
    date: "2024-09-28",
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    image: "./image5.jpg",
    time: "03:20",
    streamCount: 2500,
    userId: "user_002",
    date: "2024-09-28",
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    image: "./image6.jpg",
    time: "03:23",
    streamCount: 7300,
    userId: "user_003",
    date: "2024-09-27",
  },
  {
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    image: "./image7.jpg",
    time: "02:58",
    streamCount: 7100,
    userId: "user_006",
    date: "2024-09-24",
  },
  {
    title: "Peaches",
    artist: "Justin Bieber",
    image: "./image8.jpg",
    time: "03:18",
    streamCount: 8800,
    userId: "user_008",
    date: "2024-09-22",
  },
  {
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    image: "./image9.jpg",
    time: "03:21",
    streamCount: 1800,
    userId: "user_004",
    date: "2024-09-26",
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    image: "./image10.jpg",
    time: "03:53",
    streamCount: 3000,
    userId: "user_005",
    date: "2024-09-25",
  },
  {
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    image: "./image11.jpg",
    time: "02:21",
    streamCount: 3200,
    userId: "user_007",
    date: "2024-09-23",
  },
  {
    title: "drivers license",
    artist: "Olivia Rodrigo",
    image: "./image12.jpg",
    time: "04:02",
    streamCount: 2700,
    userId: "user_009",
    date: "2024-09-21",
  },
  {
    title: "Save Your Tears",
    artist: "The Weeknd",
    image: "./the_weeknd.jpg",
    time: "03:35",
    streamCount: 8900,
    userId: "user_010",
    date: "2024-09-20",
  },
  {
    title: "Deja Vu",
    artist: "Olivia Rodrigo",
    image: "./image14.jpg",
    time: "03:35",
    streamCount: 2200,
    userId: "user_011",
    date: "2024-09-19",
  },
  {
    title: "Montero (Call Me By Your Name)",
    artist: "Lil Nas X",
    image: "./image15.jpg",
    time: "02:17",
    streamCount: 3400,
    userId: "user_012",
    date: "2024-09-18",
  },
  {
    title: "Butter",
    artist: "BTS",
    image: "./image16.jpg",
    time: "02:44",
    streamCount: 4500,
    userId: "user_013",
    date: "2024-09-17",
  },
  {
    title: "Kiss Me More",
    artist: "Doja Cat ft. SZA",
    image: "./image17.jpg",
    time: "03:28",
    streamCount: 2600,
    userId: "user_014",
    date: "2024-09-16",
  },
  {
    title: "Levitating (feat. DaBaby)",
    artist: "Dua Lipa",
    image: "./image18.jpg",
    time: "03:23",
    streamCount: 3500,
    userId: "user_015",
    date: "2024-09-15",
  },
  {
    title: "Mad Love",
    artist: "Mabel",
    image: "./image19.jpg",
    time: "02:49",
    streamCount: 1500,
    userId: "user_001",
    date: "2024-09-29",
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
  topArtist: [
    {
      name: "Taylor Swift",
      image: "./taylor.png",
      streams: 150000,
    },
    {
      name: "Harry Styles",
      image: "./harry.jpeg",
      streams: 120000,
    },
    {
      name: "Ed Sheeran",
      image: "./ed.jpeg",
      streams: 100000,
    },
    {
      name: "The Weeknd",
      image: "./the_weeknd.jpg",
      streams: 90000,
    },
  ],
  mostSearchedSongs: [
    {
      title: "Anti-Hero",
      artist: "Taylor Swift",
      streams: 150000,
      image: "./taylor.png",
    },
    {
      title: "As It was",
      artist: "Harry Styles",
      streams: 100000,
      image: "./harry.jpeg",
    },
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      streams: 160000,
      image: "./the_weeknd.jpg",
    },
    {
      title: "Lavitating",
      artist: "Taylor Swift",
      streams: 70000,
      image: "./taylor.png",
    },
  ],
};
function getRandomSongs(songs: Song[], count = 5) {
  const shuffled = songs.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
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

      this.get("/api/stream-matrics", () => {
        return {
          totalStreams: keyMetrics.totalStreams,
          topArtist: keyMetrics.topArtist,
          mostSearchedSongs: keyMetrics.mostSearchedSongs,
          recentStreams: songData,
        };
      });
    },
  });
}
