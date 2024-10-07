import { Card, CardContent, CardHeader } from "../ui/card";
import DashboardLayout from "./DashboardLayout";
import UserGrowth from "../Charts/UserGrowth";
import { useEffect, useState } from "react";
import { UserGrowthData, UserMatrics } from "@/lib/types";

export function Dashboard() {
  const [keyMetrics, setKeyMetrics] = useState<UserMatrics | null>(null);
  const [userGrowthData, setUserGrowthData] = useState<UserGrowthData[]>([]);
  useEffect(() => {
    fetch("/api/key-matrics")
      .then((res) => res.json())
      .then((data) => {
        // console.log("tarun data at dashboard", data);
        setKeyMetrics(data.keyMetrics);
        setUserGrowthData(data.userGrowthData);
      })
      .catch((err) => {
        console.error(err);
        return {
          message: "Error fetching data",
        };
      });
  }, []);
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 grid-rows-6 md:grid-rows-5 md:grid-cols-6 gap-4">
        <Card className="md:col-span-2 row-span-1">
          <CardHeader>Total Users</CardHeader>
          <CardContent>{keyMetrics?.totalUsers.toLocaleString()}</CardContent>
        </Card>
        <Card className="md:col-span-2 row-span-1">
          <CardHeader>Active Users</CardHeader>
          <CardContent>{keyMetrics?.activeUsers.toLocaleString()}</CardContent>
        </Card>
        <Card className="md:col-span-2 md:row-span-1">
          <CardHeader>New Users</CardHeader>
          <CardContent>{keyMetrics?.newUsers.toLocaleString()}</CardContent>
        </Card>
        <Card className="row-span-3 md:row-span-6 md:col-span-6 ">
          <UserGrowth userGrowthData={userGrowthData} />
        </Card>
      </div>
    </DashboardLayout>
  );
}
