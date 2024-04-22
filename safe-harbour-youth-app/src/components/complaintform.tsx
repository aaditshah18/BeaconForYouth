import React, { useState } from "react";
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
import { submitComplaint, ComplaintDetails } from "../api/complaints"; // Ensure this path matches your project structure

interface FormState {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  email: string;
  mobile: string;
  ngo: string;
  description: string;
}

// Mock data for NGOs, replace with your API data
const ngoOptions = [
  { label: "NGO 1", value: "ngo1" },
  { label: "NGO 2", value: "ngo2" },
  // ... other NGO options
];

const ComplaintForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    email: "",
    mobile: "",
    ngo: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setForm({
      ...form,
      [event.target.name as keyof FormState]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await submitComplaint(form as ComplaintDetails);
      alert("Complaint submitted successfully!");
      navigate("/home"); // Redirect to home page upon successful submission
    } catch (error) {
      console.error("Failed to submit complaint:", error);
      alert("Failed to submit complaint. Please try again.");
    }
  };

  const onWhatsAppClick = () => {
    const message = `Name: ${form.firstName} ${form.lastName}\nDescription: ${form.description}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
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
      ngo: "",
      description: "",
    });
    navigate("/home"); // Optionally redirect to home on cancel
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
          name="ngo"
          value={form.ngo}
          label="NGO"
          onChange={handleSelectChange}
        >
          {ngoOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
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
        <Button variant="outlined" color="primary" onClick={onWhatsAppClick}>
          Share on WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default ComplaintForm;
