import { Car } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import DashboardLayout from "./DashboardLayout";

export function StreamAnalytics() {
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
