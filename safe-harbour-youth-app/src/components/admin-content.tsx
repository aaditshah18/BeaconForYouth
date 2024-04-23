import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PieChart from "../components/admin-piechart";
import { fetchAllNgos } from "../api/ngo";

export default function AdminContent() {
  // Use the NgoData type in your state
  const [ngos, setNgos] = useState<NgoDetails[]>([]);

  useEffect(() => {
    const loadNgos = async () => {
      try {
        const fetchedNgos = await fetchAllNgos(); // This should now return an array of NGOs
        setNgos(fetchedNgos);
      } catch (error) {
        console.error("Failed to fetch NGOs:", error);
      }
    };

    loadNgos();
  }, []);
  // Inline styles
  const pieChartStyle = {
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const sectionStyle = {
    marginBottom: "2rem",
    padding: "1rem",
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const tableSectionStyle = {
    ...sectionStyle,
    display: "flex",
    justifyContent: "space-between",
  };
  const tableHeaderStyle = {
    backgroundColor: "blue", // Blue background color
    color: "#fff", // White text color
  };

  return (
    <Box sx={{ flexGrow: 1, padding: "2rem", marginLeft: "250px" }}>
      <Grid container spacing={3}>
        {/* Pie Chart */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper sx={sectionStyle}>
            <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
              Complaints Overview
            </Typography>
            <Box sx={pieChartStyle}>
              {/* You will need to pass the actual data for the pie chart as well, adjust accordingly */}
              <PieChart data={{ pending: 20, inProgress: 30, completed: 20 }} />
            </Box>
          </Paper>
        </Grid>

        {/* Table with NGO data */}
        <Grid item xs={12}>
          <Paper sx={tableSectionStyle}>
            <Table>
              <TableHead sx={{ ...tableHeaderStyle }}>
                <TableRow>
                  <TableCell>NGO Name</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ngos.map((ngo) => (
                  <TableRow key={ngo._id}>
                    <TableCell>{ngo.name}</TableCell>
                    <TableCell>{ngo.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
