import { useTheme } from "../theme-provider";
import React, { useState } from "react";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = "black";
Chart.defaults.plugins.legend.title.display = true;

const colorPalette = [
  "rgba(75, 192, 192, 1)", // Teal
  "rgba(255, 99, 132, 1)", // Red
  "rgba(255, 205, 86, 1)", // Yellow
  "rgba(54, 162, 235, 1)", // Blue
  "rgba(153, 102, 255, 1)", // Purple
];

export function RevenueDistributionChart({ revenueData }) {
  console.log(revenueData);
  const isDarkMode = useTheme().theme === "dark";
  const [selectedMonth, setSelectedMonth] = useState(revenueData[0].month); // Default to the first month

  // Get the data for the selected month
  const currentMonthData = revenueData.find(
    (item) => item.month === selectedMonth
  );

  // Prepare data for the chart
  const chartData = {
    labels: [
      "Subscriptions",
      "Ads Revenue",
      "In-app Purchases",
      "Promotions",
      "Affiliate Commissions",
    ],
    datasets: [
      {
        label: `${selectedMonth} Revenue Distribution`,
        data: [
          currentMonthData.subscriptions,
          currentMonthData.ads,
          currentMonthData.inAppPurchases,
          currentMonthData.promotions,
          currentMonthData.affiliateCommissions,
        ],
        backgroundColor: colorPalette,
      },
    ],
  };

  const options = {
    cutout: "70%", // Creates the donut hole effect
    responsive: true,
    maintainAspectRatio: true, // Keep the aspect ratio
    plugins: {
      title: {
        display: true,
        color: isDarkMode ? "white" : "black",
        text: `${selectedMonth} Revenue Distribution`,
        padding: {
          top: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": " + "$" + tooltipItem.raw;
          },
        },
      },
      legend: {
        labels: {
          color: isDarkMode ? "white" : "black",
        },
      },
    },
  };

  return (
    <div className="w-full h-full col-span-3 row-span-2 p-4 border rounded-lg">
      {/* Fix height here */}
      <div className="mb-4 flex justify-between">
        <div>
          <h2>Revenue Distribution</h2>
        </div>
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="ml-auto h-7 w-[130px] rounded-lg pl-2.5">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {revenueData.map((item) => (
              <SelectItem
                key={item.month}
                value={item.month}
                className="rounded-lg [&_span]:flex"
              >
                {item.month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-full h-full">
        <Doughnut data={chartData} options={options} />
      </div>{" "}
    </div>
  );
}
