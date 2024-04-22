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
import axios from "axios";

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form data:", form);

    // Endpoint where your backend API is listening
    const apiEndpoint = "http://localhost:3005/api/complaints"; // Change this URL to where your server is hosted

    axios
      .post(apiEndpoint, form)
      .then((response) => {
        console.log("Complaint submitted successfully:", response.data);
        alert("Complaint submitted successfully!");
        handleCancel(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("Error submitting complaint:", error);
        alert("Failed to submit complaint. Please try again.");
      });
  };

  const onWhatsAppClick = () => {
    const message = `Name: ${form.firstName} ${form.lastName}\nDescription: ${form.description}`;

    fetch("https://graph.facebook.com/v18.0/310816992110840/messages", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer EAAKP9dVmIiUBOwZAzU9BJiTUm6mScbGW63tV4jPMF4UmvVGXZByQJ6c6X5fymL6CQdVF5IYnpZBFgZAYmDb1hh22Q3ngCt98pFzUA95RJ0UXpS3gjA8mFT2IWE9y50OwpHsAMSZAhbRaiAMRXcB2LWBf6AEZBp0WNYniFBsdhs4HWeYcfZBTZAaqQHyzS5FZCpW7m9B24SyM4G70zRkw91GuZCZBBHm5yAZD",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: "+18578004079", // You need to provide the recipient's phone number here
        type: "template",
        template: {
          name: "send_complaint_id",
          language: {
            code: "en_US",
          },
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("Error:", error);
      });

    // window.open(url, "_blank");
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
          Share on Whatsapp
        </Button>
      </Box>
    </Box>
  );
};

export default ComplaintForm;
