import React from 'react';
import { TableHead } from '@mui/material';

import { Box, Grid, Paper, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import PieChart from '../components/admin-piechart';

export default function AdminContent() {
  // Inline styles
  const pieChartStyle = {
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const sectionStyle = {
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const tableSectionStyle = {
    ...sectionStyle,
    display: 'flex',
    justifyContent: 'space-between',
  };

  const leftSummaryContainerStyle = {
    flex: 1,
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    margin: '0.5rem',
    marginRight: '0.25rem', // Adjust margin to create space between containers
    display: 'flex',
    flexDirection: 'column',
  };

  const summaryItemContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  };

  const summaryItemStyle = {
    flex: 1,
    padding: '0.5rem',
    textAlign: 'center',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    margin: '0 0.25rem',
  };

  const coloredSummaryItemStyle = {
    ...summaryItemStyle,
    backgroundColor: '#f44336', // Light color for total and approval boxes
    color: '#fff', // White text color
  };

  return (
    <Box sx={{ flexGrow: 1, padding: '2rem', marginLeft: '250px' }}>
      <Grid container spacing={3}>
        {/* Left Summary Containers */}
        <Grid item xs={6} md={3} lg={3}>
          <Paper sx={leftSummaryContainerStyle}>
            {/* NGO Summary */}
            <Box sx={summaryItemContainerStyle}>
              <Paper sx={coloredSummaryItemStyle}>
                <Typography variant="h6">Total</Typography>
                <Typography>120</Typography>
              </Paper>
              <Paper sx={coloredSummaryItemStyle}>
                <Typography variant="h6">Approved</Typography>
                <Typography>90</Typography>
              </Paper>
            </Box>
            <Paper sx={summaryItemStyle}>
              <Typography variant="h6">Pending Approval</Typography>
              <Typography>30</Typography>
            </Paper>
          </Paper>
        </Grid>

        {/* Complaint Summary */}
        <Grid item xs={6} md={3} lg={3}>
          <Paper sx={leftSummaryContainerStyle}>
            <Box sx={summaryItemContainerStyle}>
              <Paper sx={summaryItemStyle}>
                <Typography variant="h6">Total</Typography>
                <Typography>70</Typography>
              </Paper>
              <Paper sx={summaryItemStyle}>
                <Typography variant="h6">Pending</Typography>
                <Typography>20</Typography>
              </Paper>
            </Box>
            <Box sx={summaryItemContainerStyle}>
              <Paper sx={summaryItemStyle}>
                <Typography variant="h6">In Progress</Typography>
                <Typography>30</Typography>
              </Paper>
              <Paper sx={summaryItemStyle}>
                <Typography variant="h6">Completed</Typography>
                <Typography>20</Typography>
              </Paper>
            </Box>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper sx={sectionStyle}>
            <Typography variant="h5" sx={{ marginBottom: '1rem' }}>Complaints Overview</Typography>
            <Box sx={pieChartStyle}>
              <PieChart data={{ pending: 20, inProgress: 30, completed: 20 }} />
            </Box>
          </Paper>
        </Grid>

        {/* NGOs Table */}
        <Grid item xs={12}>
          <Paper sx={tableSectionStyle}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>NGO Name</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {['NGO1', 'NGO2', 'NGO3'].map((ngo, index) => (
                  <TableRow key={ngo}>
                    <TableCell>{ngo}</TableCell>
                    <TableCell>{index % 2 === 0 ? 'Active' : 'Pending Approval'}</TableCell>
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
