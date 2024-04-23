import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { fetchAllNgos, NgoDetails } from "../api/ngo"; // Adjust the import path as necessary
import { submitComplaint, ComplaintDetails } from "../api/complaints"; // Ensure this path matches your project structure

interface ComplaintFormState {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  email: string;
  mobile: string;
  ngoId: string;
  description: string;
}

const ComplaintForm: React.FC = () => {
  const [form, setForm] = useState<ComplaintFormState>({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    email: "",
    mobile: "",
    ngoId: "",
    description: "",
  });
  const [ngos, setNgos] = useState<NgoDetails[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadNgos = async () => {
      try {
        const fetchedNgos = await fetchAllNgos();
        setNgos(fetchedNgos);
      } catch (error) {
        console.error("Error fetching NGOs:", error);
      }
    };

    loadNgos();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setForm({
      ...form,
      ngoId: event.target.value as string,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Exclude server-managed properties when constructing the data object
    const complaintData: Omit<
      ComplaintDetails,
      "_id" | "createdTs" | "updatedTs"
    > = {
      ...form,
      ngo: form.ngoId, // Assuming the API needs 'ngo' field as an ID
      status: "New", // Default status
    };

    try {
      await submitComplaint(complaintData as ComplaintDetails);
      alert("Complaint submitted successfully!");
      navigate("/home");
    } catch (error) {
      console.error("Failed to submit complaint:", error);
      alert("Failed to submit complaint. Please try again.");
    }
  };

  const handleCancel = () => {
    setForm({
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      email: "",
      mobile: "",
      ngoId: "",
      description: "",
    });
    navigate("/home");
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 600,
        margin: "auto",
        padding: 2,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 1,
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
        Complaint Form
      </Typography>
      <TextField
        required
        label="First Name"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        required
        label="Last Name"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        required
        label="City"
        name="city"
        value={form.city}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        required
        label="State"
        name="state"
        value={form.state}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        required
        label="Country"
        name="country"
        value={form.country}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        required
        label="Zip Code"
        name="zipCode"
        value={form.zipCode}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        required
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        required
        label="Mobile No"
        name="mobile"
        value={form.mobile}
        onChange={handleChange}
        margin="normal"
      />
      <FormControl margin="normal" required>
        <InputLabel id="ngo-label">NGO</InputLabel>
        <Select
          labelId="ngo-label"
          name="ngoId"
          value={form.ngoId}
          onChange={handleSelectChange}
        >
          {ngos.map((ngo) => (
            <MenuItem key={ngo._id.toString()} value={ngo._id.toString()}>
              {ngo.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        required
        label="Description"
        name="description"
        multiline
        rows={4}
        value={form.description}
        onChange={handleChange}
        margin="normal"
      />
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="outlined" color="primary" onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ComplaintForm;
