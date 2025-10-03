import React from "react";
import {
  Modal,
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
};

const ModalDetalle = ({ open, handleClose, raza }) => {
  if (!raza) return null;
  const imagenURL = raza.reference_image_id
    ? `https://cdn2.thecatapi.com/images/${raza.reference_image_id}.jpg`
    : "https://via.placeholder.com/400x300?text=Sin+Imagen";

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <img
          src={imagenURL}
          alt={raza.name}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <Typography variant="h4" mt={2}>
          {raza.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Origen: {raza.origin} | Vida: {raza.life_span} años
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6">Descripción</Typography>
        <Typography>{raza.description}</Typography>
        <Typography variant="h6" mt={2}>
          Temperamento
        </Typography>
        <Typography>{raza.temperament}</Typography>
        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => window.open(raza.wikipedia_url, "_blank")}
        >
          Wikipedia
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalDetalle;
