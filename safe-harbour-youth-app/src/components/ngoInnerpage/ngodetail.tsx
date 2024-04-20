import React, { useState } from "react";
import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Card,
  CardMedia,
  Box,
  tableCellClasses,
} from "@mui/material";

import { styled } from "@mui/material/styles";

interface NGO {
  key: string;
  ngoName: string;
  location: string;
  description: string;
  map: string;
}

const data: NGO[] = [
  {
    key: "1",
    ngoName: "NGO 1",
    location: "Location 1",
    description: "Description 1",
    map: "Map URL 1",
  },
  {
    key: "2",
    ngoName: "NGO 2",
    location: "Location 2",
    description: "Description 2",
    map: "Map URL 2",
  },
  {
    key: "3",
    ngoName: "NGO 3",
    location: "Location 3",
    description: "Description 3",
    map: "Map URL 3",
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.augmentColor({
      color: { main: "#FFCC80" },
      name: "lightOrange",
    }).main, // Use the 'main' property instead of 'lightOrange'
    color: theme.palette.common.black, // Adjusted for better contrast with light background
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const NGOPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNGOs = data.filter(
    (ngo) =>
      ngo.ngoName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ngo.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Card sx={{ marginBottom: 2 }}>
        <CardMedia
          component="img"
          height="400"
          image="../public/images/campaignban1.jpeg" // Specify the path to your banner image
          alt="NGO Banner"
        />
      </Card>

      <Paper
        sx={{
          p: 2,
          marginBottom: 2,
          backgroundColor: " green",
          color: "white",
          textAlign: "center", // This aligns the text within the Paper component to the center
        }}
      >
        <Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
          NGOs Associated with Safe Harbour
        </Typography>
      </Paper>

      <TextField
        label="Search NGOs by Name or Location"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          marginBottom: 2,
          "& label.Mui-focused": {
            color: "orange",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "orange",
            },
          },
        }}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>NGO Name</StyledTableCell>
              <StyledTableCell>Location</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Map</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {filteredNGOs.map((ngo) => (
              <StyledTableRow key={ngo.key}>
                <StyledTableCell component="th" scope="row">
                  {ngo.ngoName}
                </StyledTableCell>
                <StyledTableCell>{ngo.location}</StyledTableCell>
                <StyledTableCell>{ngo.description}</StyledTableCell>
                <StyledTableCell>
                  <a href={ngo.map} target="_blank" rel="noopener noreferrer">
                    View Map
                  </a>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NGOPage;
