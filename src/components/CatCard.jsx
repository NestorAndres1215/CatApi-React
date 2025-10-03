import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const CatCard = ({ raza, toggleFavorito, isFavorito, abrirModal }) => {
  const imagenURL = raza.reference_image_id
    ? `https://cdn2.thecatapi.com/images/${raza.reference_image_id}.jpg`
    : "https://via.placeholder.com/400x300?text=Sin+Imagen";

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={imagenURL}
        alt={raza.name}
      />
      <CardContent>
        <Typography variant="h6">{raza.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          Origen: {raza.origin} | Vida: {raza.life_span} años
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => toggleFavorito(raza.id)}>
          {isFavorito ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
        <Button variant="contained" onClick={() => abrirModal(raza)}>
          Ver detalle
        </Button>
      </CardActions>
    </Card>
  );
};

export default CatCard;
