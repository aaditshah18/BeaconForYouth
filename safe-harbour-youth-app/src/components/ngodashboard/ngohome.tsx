import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registering ChartJS plugins
ChartJS.register(ArcElement, Tooltip, Legend);

interface Complaint {
  id: string;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  email: string;
  mobile: string;
  description: string;
  status: string;
}

const NGOAdminPanel = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState<Complaint[]>([
    // Adding dummy data
    {
      id: "C001",
      firstName: "John",
      lastName: "Doe",
      city: "New York",
      state: "NY",
      country: "USA",
      zipCode: "10001",
      email: "john.doe@example.com",
      mobile: "1234567890",
      description: "Complaint about service delay.",
      status: "Pending",
    },
    {
      id: "C002",
      firstName: "Jane",
      lastName: "Smith",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      zipCode: "94102",
      email: "jane.smith@example.com",
      mobile: "2345678901",
      description: "Issue with product quality.",
      status: "In Progress",
    },
  ]);

  // Static data for Pie Chart
  const pieData = {
    labels: ["Total", "Pending", "Complete", "In Progress"],
    datasets: [
      {
        data: [complaints.length, 1, 0, 1], // Dynamically calculated data based on complaints array
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
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No</TableCell>
              <TableCell>Complaint ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Zip Code</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile No</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complaints.map((comp, index) => (
              <TableRow key={comp.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{comp.id}</TableCell>
                <TableCell>{comp.firstName}</TableCell>
                <TableCell>{comp.lastName}</TableCell>
                <TableCell>{comp.city}</TableCell>
                <TableCell>{comp.state}</TableCell>
                <TableCell>{comp.country}</TableCell>
                <TableCell>{comp.zipCode}</TableCell>
                <TableCell>{comp.email}</TableCell>
                <TableCell>{comp.mobile}</TableCell>
                <TableCell>{comp.description}</TableCell>
                <TableCell>{comp.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default NGOAdminPanel;
