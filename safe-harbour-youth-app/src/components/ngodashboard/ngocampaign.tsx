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
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  getCampaigns,
  deleteCampaign,
  createCampaign,
} from "../../api/campaignService";

interface Campaign {
  _id?: string;
  name: string;
  description: string;
  date: string;
  location: string;
}

const CampaignMenu: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  useEffect(() => {
    getCampaigns()
      .then((data) => {
        setCampaigns(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Error fetching campaigns:", error);
        setCampaigns([]);
      });
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
      createCampaign(values)
        .then((newCampaign) => {
          setCampaigns([...campaigns, newCampaign]); // Update the campaigns list with the new campaign
          formik.resetForm();
          setShowForm(false); // Hide form on successful submission
        })
        .catch((error) => {
          console.error("Error adding the campaign:", error);
        });
    },
  });

  const onCampaignDelete = (id: string) => {
    deleteCampaign(id)
      .then(() => {
        setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting the campaign:", error);
      });
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Manage Campaigns
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowForm(!showForm)} // Toggle form visibility
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
              <TableRow key={campaign._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{campaign.name}</TableCell>
                <TableCell>{campaign.description}</TableCell>
                <TableCell>{campaign.date}</TableCell>
                <TableCell>{campaign.location}</TableCell>
                <TableCell>
                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => onCampaignDelete(campaign._id ?? "")}
                  >
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
