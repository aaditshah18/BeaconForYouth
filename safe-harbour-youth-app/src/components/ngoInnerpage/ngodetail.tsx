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
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import MapComponent from "./../MapComponent"; //
import TopbarContainer from "../header/desktop-appbar.tsx";
import AppbarContainer from "../header/desktop-appbar.tsx";

interface NGO {
  key: string;
  ngoName: string;
  location: string;
  description: string;
  lat: number; // Latitude for the map
  lng: number; // Longitude for the map
}

const data: NGO[] = [
  {
    key: "1",
    ngoName: "NGO 1",
    location: "Location 1",
    description: "Description 1",
    lat: 40.712776,
    lng: -74.005974,
  },
  {
    key: "2",
    ngoName: "NGO 2",
    location: "Location 2",
    description: "Description 2",
    lat: 34.052235,
    lng: -118.243683,
  },
  {
    key: "3",
    ngoName: "NGO 3",
    location: "Location 3",
    description: "Description 3",
    lat: 37.774929,
    lng: -122.419418,
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const NGOPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mapOpen, setMapOpen] = useState(false);
  const [selectedNGOLocation, setSelectedNGOLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const handleMapOpen = (lat: number, lng: number) => {
    setSelectedNGOLocation({ lat, lng });
    setMapOpen(true);
  };

  const handleMapClose = () => {
    setMapOpen(false);
  };

  const filteredNGOs = data.filter(
    (ngo) =>
      ngo.ngoName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ngo.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Card sx={{ marginBottom: 2 }}>
        <CardMedia
          component="img"
          height="400"
          image="/images/campaignban1.jpeg" // Specify the path to your banner image
          alt="NGO Banner"
        />
      </Card>
      <Paper
        sx={{
          p: 2,
          marginBottom: 2,
          backgroundColor: "lightblue",
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">NGOs Associated with Safe Harbour</Typography>
      </Paper>
      <TextField
        label="Search NGOs by Name or Location"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TableContainer component={Paper}>
        <Table>
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
                  <button onClick={() => handleMapOpen(ngo.lat, ngo.lng)}>
                    View Map
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={mapOpen} onClose={handleMapClose}>
        <DialogTitle>NGO Location</DialogTitle>
        <DialogContent>
          {selectedNGOLocation && (
            <MapComponent
              lat={selectedNGOLocation.lat}
              lng={selectedNGOLocation.lng}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default NGOPage;
