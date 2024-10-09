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
  subscriptions: number;
  ads: number;
  inAppPurchases: number;
  promotions: number;
  affiliateCommissions: number;
  totalRevenue: number;
};

export type Artist = {
  name: string;
  image: string;
  streamCount: number;
  revenue: number;
};

export type Song = {
  id: string;
  title: string;
  artist: Artist;
  album?: string;
  image: string;
  time: string;
  streamCount: number;
  userId?: string;
  date: string;
  revenue: number;
  search: number;
};

export type StateRevenueType = {
  id: string;
  state: string;
  revenue: number;
};
