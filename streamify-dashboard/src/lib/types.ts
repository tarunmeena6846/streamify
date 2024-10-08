export type StreamData = {
  // id: string;
  artist: string;
  song: string;
  date: string;
  streamCount: number;
};

// export type Song = {
//   title: string;
//   artist: string;
//   image: string;
//   time: string;
//   streamCount: number;
//   userId?: string;
//   date: string | null;
//   revenue: number | null;
// };

export type UserGrowthData = {
  month: string;
  totalUsers: number;
  activeUsers: number;
};
export type UserMatrics = {
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
};

export type RevenueData = {
  totalAggregate: number;
  projectedRevenue: number;
  profit: number;
  profitMargin: string;
  revenuePerUser: string;
};

export type MonthlyBreakdown = {
  month: string;
  susbscriptions: number;
  ads: number;
  inAppPurchases: number;
  promotions: number;
  affiliateCommissions: number;
  totalRevenue: number;
};

export type Artist = {
  name: string;
  image: string;
};

// Define the Revenue type for songs

// Define the common Song type
export type Song = {
  id: string; // Unique identifier for the song
  title: string; // Song title
  artist: Artist; // Artist information
  album?: string; // Optional album field
  image: string; // Song image or thumbnail
  time: string; // Duration of the song
  streamCount: number; // Total number of streams
  userId?: string; // Optional field to associate a user with the song
  date: string; // Date when the song was uploaded or streamed
  revenue: number; // Optional revenue information if relevant
  search: number;
};
