import React, { useState, useEffect } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MapComponent from "../MapComponent";
import { fetchAllNgos, NgoDetails } from "../../api/ngo";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  "&.MuiTableCell-head": {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  "&.MuiTableCell-body": {
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
  const [ngos, setNgos] = useState<NgoDetails[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mapOpen, setMapOpen] = useState(false);
  const [selectedNGOLocation, setSelectedNGOLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

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

  const handleMapOpen = (lat: number, lng: number) => {
    setSelectedNGOLocation({ lat, lng });
    setMapOpen(true);
  };

  const handleMapClose = () => {
    setMapOpen(false);
  };

  const filteredNGOs = ngos.filter(
    (ngo) =>
      ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ngo.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Card sx={{ marginBottom: 2 }}>
        <CardMedia
          component="img"
          height="400"
          image="../../public/images/campaignban1.jpeg"
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
        label="Search NGOs by Name or Address"
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
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Map</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {filteredNGOs.map((ngo) => (
              <StyledTableRow key={ngo._id.toString()}>
                <StyledTableCell component="th" scope="row">
                  {ngo.name}
                </StyledTableCell>
                <StyledTableCell>{ngo.address}</StyledTableCell>
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
