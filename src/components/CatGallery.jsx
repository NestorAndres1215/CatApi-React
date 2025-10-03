import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import CatCard from "./CatCard";
import Buscador from "./Buscador";
import Filtro from "./Filtro";
import Paginacion from "./Paginacion";
import VolverArriba from "./VolverArriba";
import ModalDetalle from "./ModalDetalle";
import useRazas from "../hooks/useRazas";
import "../styles/CatGallery.css"; // Import the new CSS

const CatGallery = () => {
  const {
    razasPaginadas,
    loading,
    paginaActual,
    setPaginaActual,
    totalPaginas,
    busqueda,
    setBusqueda,
    filtro,
    setFiltro,
    toggleFavorito,
    favoritos,
    modalRaza,
    setModalRaza,
  } = useRazas();

  if (loading) return <CircularProgress sx={{ display: "block", mx: "auto", mt: 4 }} />;

  return (
    <div className="cat-gallery-container">
      <div className="cat-gallery-search-filter">
        <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
        <Filtro filtro={filtro} setFiltro={setFiltro} />
      </div>
      
      <Grid container spacing={2} className="cat-gallery-grid">
        {razasPaginadas.map((raza) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={raza.id}>
            <CatCard
              raza={raza}
              toggleFavorito={toggleFavorito}
              isFavorito={favoritos.includes(raza.id)}
              abrirModal={setModalRaza}
            />
          </Grid>
        ))}
      </Grid>
      
      <div className="cat-gallery-pagination">
        <Paginacion
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
          totalPaginas={totalPaginas}
        />
      </div>
      
      <VolverArriba className="cat-gallery-back-to-top" />
      <ModalDetalle
        open={!!modalRaza}
        handleClose={() => setModalRaza(null)}
        raza={modalRaza}
      />
    </div>
  );
};

export default CatGallery;