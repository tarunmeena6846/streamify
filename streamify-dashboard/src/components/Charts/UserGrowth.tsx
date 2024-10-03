// UserGrowthChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTheme } from "../theme-provider";

// Registering the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserGrowth = ({ userGrowthData }) => {
  const isDarkMode = useTheme().theme === "dark";
  console.log(isDarkMode);
  // Prepare data for the chart
  const chartData = {
    labels: userGrowthData.map((item) => item.month),
    datasets: [
      {
        label: "Total Users",
        data: userGrowthData.map((item) => item.totalUsers),
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
      {
        label: "Active Users",
        data: userGrowthData.map((item) => item.activeUsers),
        fill: false,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "User Growth Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          //   text: "Months",
        },
        // ticks: {
        //   color: isDarkMode ? "black" : "white",
        //   font: {
        //     // size: window.innerWidth < 640 ? 10 : 12, // Smaller font for x-axis on mobile
        //   },
        // },
      },
      y: {
        title: {
          display: true,
          text: "Number of Users",
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default UserGrowth;
