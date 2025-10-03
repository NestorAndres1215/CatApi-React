import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import CatCard from "./CatCard";
import Buscador from "./Buscador";
import Filtro from "./Filtro";
import Paginacion from "./Paginacion";
import VolverArriba from "./VolverArriba";
import ModalDetalle from "./ModalDetalle";
import useRazas from "../hooks/useRazas";

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
    <>
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />
      <Filtro filtro={filtro} setFiltro={setFiltro} />
      
      <Grid container spacing={2}>
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
      
      <Paginacion
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
        totalPaginas={totalPaginas}
      />
      
      <VolverArriba />
      <ModalDetalle
        open={!!modalRaza}
        handleClose={() => setModalRaza(null)}
        raza={modalRaza}
      />
    </>
  );
};

export default CatGallery;
