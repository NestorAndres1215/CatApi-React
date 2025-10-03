import React from "react";
import { Button, Stack } from "@mui/material";

const Filtro = ({ filtro, setFiltro }) => {
  const filtros = ["todos", "jugueton", "tranquilo", "social"];
  return (
    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
      {filtros.map((f) => (
        <Button
          key={f}
          variant={filtro === f ? "contained" : "outlined"}
          onClick={() => setFiltro(f)}
        >
          {f}
        </Button>
      ))}
    </Stack>
  );
};

export default Filtro;
