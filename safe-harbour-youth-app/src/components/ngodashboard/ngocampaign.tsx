import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  AppBar,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getCampaigns } from "../../api/campaignService";

interface Campaign {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
}

const CampaignMenu: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    // Demo content
    {
      id: "1",
      name: "Tree Plantation Drive",
      description: "A campaign to plant 5000 trees in urban areas.",
      date: "2024-04-22",
      location: "Central Park",
    },
    {
      id: "2",
      name: "Beach Cleanup",
      description: "Cleanup event at local beaches.",
      date: "2024-05-05",
      location: "Long Beach",
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Use the campaignService to fetch campaigns from the server
    getCampaigns()
      .then((data) => {
        console.log(data);
        setCampaigns(data);
      })
      .catch((error) => {
        console.error("Error fetching campaigns:", error);
      });
  });

  // Formik for form handling
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
      setShowForm(false); // Hide the form after submission
    },
  });

  const onCampaignDelete = (id: string) => {
    const updatedCampaigns = campaigns.filter((campaign) => campaign.id !== id);
    setCampaigns(updatedCampaigns);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Manage Campaigns
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowForm(!showForm)}
        sx={{ mb: 2 }}
      >
        {showForm ? "Cancel" : "Add Campaign"}
      </Button>

      {showForm && (
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
            Submit
          </Button>
        </form>
      )}

      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No</TableCell>
              <TableCell>Campaign Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Location</TableCell>
              <TableCell></TableCell>
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
                <TableCell>
                  <Button onClick={() => onCampaignDelete(campaign.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CampaignMenu;
