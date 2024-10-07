export type StreamData = {
  // id: string;
  artist: string;
  song: string;
  date: string;
  streamCount: number;
};

export type Song = {
  title: string;
  artist: string;
  image: string;
  time: string;
  streamCount: number;
  userId: string | null;
  date: string | null;
};

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
