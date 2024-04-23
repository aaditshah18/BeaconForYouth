import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { fetchAllDashboards } from "../api/dashboards";

// You might not need this interface if no props are passed to PieChart.
// interface PieChartProps {}

const PieChart = () => {
  // This state will hold the data needed for our chart.
  const [dashboardData, setDashboardData] = useState({
    totalPending: 0,
    totalInProgress: 0,
    totalCompleted: 0,
  });

  useEffect(() => {
    fetchAllDashboards()
      .then((res) => {
        if (res.result) {
          // Assuming 'res.data' contains the fields totalPending, totalInProgress, totalCompleted directly
          setDashboardData(res.data);
        } else {
          // Handle the incorrect response here
          console.error("Failed to fetch data");
        }
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  const chartData = {
    labels: ["Pending", "In Progress", "Completed"],
    datasets: [
      {
        label: "Complaints",
        data: [
          dashboardData.totalPending,
          dashboardData.totalInProgress,
          dashboardData.totalCompleted,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // We render the Pie chart only when data is available
  return <Pie data={chartData} />;
};

export default PieChart;
