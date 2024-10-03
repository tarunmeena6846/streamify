import { User } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import DashboardLayout from "./DashboardLayout";
import UserGrowth from "../Charts/UserGrowth";
export const keyMetrics = {
  totalUsers: 1350000,
  activeUsers: 950000,
  newUsers: 50000,
};
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

export function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <Card className="col-span-2 ">
          <CardHeader>Total Users</CardHeader>
          <CardContent>{keyMetrics.totalUsers}</CardContent>
        </Card>
        <Card className="col-span-2 ">
          <CardHeader>Active Users</CardHeader>
          <CardContent>{keyMetrics.activeUsers}</CardContent>
        </Card>
        <Card className="col-span-2 ">
          <CardHeader>New Users</CardHeader>
          <CardContent>{keyMetrics.newUsers}</CardContent>
        </Card>
        <Card className="col-span-6 ">
          <UserGrowth userGrowthData={userGrowthData} />
        </Card>
      </div>
    </DashboardLayout>
  );
}
