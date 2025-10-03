import React from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Buscador = ({ busqueda, setBusqueda }) => {
  return (
    <Box 
      sx={{ 
        mb: 3, 
        maxWidth: 600, 
        mx: "auto", 
        p: 2,
      }} 
      className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md"
    >
      <TextField
        fullWidth
        label="Buscar gatito"
        variant="outlined"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className="text-indigo-500" />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            backgroundColor: "white",
            "&:hover fieldset": {
              borderColor: "#4f46e5",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#4f46e5",
              borderWidth: "2px",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#6b7280",
            "&.Mui-focused": {
              color: "#4f46e5",
            },
          },
        }}
        className="transition-all duration-300"
        placeholder="Ingresa el nombre del gatito..."
      />
    </Box>
  );
};

export default Buscador;