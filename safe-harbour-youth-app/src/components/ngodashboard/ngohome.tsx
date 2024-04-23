import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { fetchAllDashboards } from "../../api/dashboards";
import { dashboardResponse } from "../../api/dashboards";

// Registering ChartJS plugins
ChartJS.register(ArcElement, Tooltip, Legend);

const NGOAdminPanel = () => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState<dashboardResponse | null>(
    null
  );

  useEffect(() => {
    fetchAllDashboards().then((res) => {
      setDashboardData(res.data);

      if (!res.result) {
        // Do something in here if it's incorrect response
      }
    });
  }, []);

  // Pie Chart Data using state variables
  const pieData = {
    labels: ["Total", "Pending", "Complete", "In Progress"],
    datasets: [
      {
        data: [
          dashboardData?.totalComplaints,
          dashboardData?.totalPending,
          dashboardData?.totalCompleted,
          dashboardData?.totalInProgress,
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#4BC0C0", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#4BC0C0", "#FFCE56"],
      },
    ],
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NGO Dashboard
          </Typography>
          <Button
            color="inherit"
            onClick={() => navigate("/ngodashboard/ngohome")}
          >
            Home
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate("../ngodashboard/ngocampaign")}
          >
            Campaign
          </Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" sx={{ my: 2 }}>
        Complaint Overview
      </Typography>
      <div style={{ width: "300px", height: "300px" }}>
        <Pie data={pieData} options={{ maintainAspectRatio: false }} />
      </div>
    </Box>
  );
};

export default NGOAdminPanel;
