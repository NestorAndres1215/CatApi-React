import React from "react";
import { Stack, Button, Typography } from "@mui/material";

const Paginacion = ({ paginaActual, setPaginaActual, totalPaginas }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ my: 2 }}>
      {Array.from({ length: totalPaginas }, (_, i) => (
        <Button
          key={i + 1}
          variant={paginaActual === i + 1 ? "contained" : "outlined"}
          onClick={() => setPaginaActual(i + 1)}
        >
          {i + 1}
        </Button>
      ))}
      <Typography sx={{ ml: 2 }}>
        Página {paginaActual} de {totalPaginas}
      </Typography>
    </Stack>
  );
};

export default Paginacion;
