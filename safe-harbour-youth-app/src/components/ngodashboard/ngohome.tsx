// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   Button,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// //i have static data to test the pie chart
// //{  "totalComplaints": 10,  "totalPending": 5,  "totalCompleted": 3,  "totalInProgress": 2 }
// import PieChart from "./PieChart";
// import { PieChartContainer } from "./styles";

// // Mock data and types
// interface Complaint {
//   id: string;
//   firstName: string;
//   lastName: string;
//   city: string;
//   state: string;
//   country: string;
//   zipCode: string;
//   email: string;
//   mobile: string;
//   description: string;
//   status: string;
// }

// interface Campaign {
//   id: string;
//   name: string;
//   description: string;
//   date: string;
//   location: string;
// }

// const NGOAdminPanel = () => {
//   const navigate = useNavigate();
//   const [complaints, setComplaints] = useState<Complaint[]>([]);
//   const [campaigns, setCampaigns] = useState<Campaign[]>([]);

//   useEffect(() => {
//     // Simulate fetching data
//     const fetchComplaints = async () => {
//       // Replace with actual fetch code
//       setComplaints([
//         /* simulated data */
//       ]);
//     };
//     fetchComplaints();
//   }, []);

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       description: "",
//       date: "",
//       location: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required("Required"),
//       description: Yup.string().required("Required"),
//       date: Yup.string().required("Required"),
//       location: Yup.string().required("Required"),
//     }),
//     onSubmit: (values) => {
//       const newCampaign = {
//         id: (Math.random() * 1000).toString(),
//         name: values.name,
//         description: values.description,
//         date: values.date,
//         location: values.location,
//       };
//       setCampaigns([...campaigns, newCampaign]);
//       formik.resetForm();
//     },
//   });

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             NGO Dashboard
//           </Typography>
//           <Button color="inherit" onClick={() => navigate("/home")}>
//             Home
//           </Button>
//           <Button color="inherit" onClick={() => navigate("/campaign")}>
//             Campaign
//           </Button>
//         </Toolbar>
//       </AppBar>
//       {/* Complaint Overview */}
//       <Typography variant="h4" sx={{ my: 2 }}>
//         Complaint Overview
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Sr. No</TableCell>
//               <TableCell>Complaint ID</TableCell>
//               <TableCell>First Name</TableCell>
//               <TableCell>Last Name</TableCell>
//               <TableCell>City</TableCell>
//               <TableCell>State</TableCell>
//               <TableCell>Country</TableCell>
//               <TableCell>Zip Code</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Mobile No</TableCell>
//               <TableCell>Description</TableCell>
//               <TableCell>Status</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {complaints.map((comp, index) => (
//               <TableRow key={comp.id}>
//                 <TableCell>{index + 1}</TableCell>
//                 <TableCell>{comp.id}</TableCell>
//                 <TableCell>{comp.firstName}</TableCell>
//                 <TableCell>{comp.lastName}</TableCell>
//                 <TableCell>{comp.city}</TableCell>
//                 <TableCell>{comp.state}</TableCell>
//                 <TableCell>{comp.country}</TableCell>
//                 <TableCell>{comp.zipCode}</TableCell>
//                 <TableCell>{comp.email}</TableCell>
//                 <TableCell>{comp.mobile}</TableCell>
//                 <TableCell>{comp.description}</TableCell>
//                 <TableCell>{comp.status}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Campaign Form */}
//       <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
//         Manage Campaigns
//       </Typography>
//       <form onSubmit={formik.handleSubmit}>
//         {/* Fields for campaign form */}
//         {/* Additional fields and buttons */}
//       </form>

//       {/* List of campaigns */}
//       <TableContainer component={Paper} sx={{ mt: 4 }}>
//         <Table>{/* Table for displaying campaigns */}</Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default NGOAdminPanel;

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
import { useFormik } from "formik";
import * as Yup from "yup";
import { Pie } from "react-chartjs-2";

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

interface Campaign {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
}

const NGOAdminPanel = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchComplaints = async () => {
      // Replace with actual fetch code
      setComplaints([
        /* simulated data */
      ]);
    };
    fetchComplaints();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      date: "",
      location: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      date: Yup.string().required("Required"),
      location: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const newCampaign = {
        id: (Math.random() * 1000).toString(),
        name: values.name,
        description: values.description,
        date: values.date,
        location: values.location,
      };
      setCampaigns([...campaigns, newCampaign]);
      formik.resetForm();
    },
  });

  // Static data for Pie Chart
  const pieData = {
    labels: ["Total", "Pending", "Complete", "In Progress"],
    datasets: [
      {
        data: [10, 5, 3, 2], // Total, Pending, Complete, In Progress
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
          <Button color="inherit" onClick={() => navigate("/home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/campaign")}>
            Campaign
          </Button>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" sx={{ my: 2 }}>
        Complaint Overview
      </Typography>
      pieData.des
      <Pie data={pieData} />
      <TableContainer component={Paper}>
        <Table>
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
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Manage Campaigns
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Campaign Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          multiline
          rows={3}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          type="date"
          label="Date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Location"
          name="location"
          value={formik.values.location}
          onChange={formik.handleChange}
          error={formik.touched.location && Boolean(formik.errors.location)}
          helperText={formik.touched.location && formik.errors.location}
          sx={{ mb: 2 }}
        />
        <Button color="primary" variant="contained" type="submit">
          Add Campaign
        </Button>
      </form>
      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No</TableCell>
              <TableCell>Campaign Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {campaigns.map((campaign, index) => (
              <TableRow key={campaign.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{campaign.name}</TableCell>
                <TableCell>{campaign.description}</TableCell>
                <TableCell>{campaign.date}</TableCell>
                <TableCell>{campaign.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default NGOAdminPanel;
