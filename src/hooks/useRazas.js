import { useState, useEffect } from "react";
import { obtenerRazas } from "../services/catApi";

const useRazas = () => {
  const [razas, setRazas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);
  const [porPagina] = useState(12);
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [favoritos, setFavoritos] = useState([]);
  const [modalRaza, setModalRaza] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerRazas();
        setRazas(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleFavorito = (id) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const filtrarRazas = () => {
    return razas
      .filter((r) => {
        const matchesSearch =
          r.name.toLowerCase().includes(busqueda.toLowerCase()) ||
          r.origin.toLowerCase().includes(busqueda.toLowerCase()) ||
          r.temperament.toLowerCase().includes(busqueda.toLowerCase());

        const matchesFilter = (() => {
          switch (filtro) {
            case "jugueton":
              return r.temperament.toLowerCase().includes("playful");
            case "tranquilo":
              return r.temperament.toLowerCase().includes("calm");
            case "social":
              return r.temperament.toLowerCase().includes("social");
            default:
              return true;
          }
        })();

        return matchesSearch && matchesFilter;
      });
  };

  const totalPaginas = Math.ceil(filtrarRazas().length / porPagina);

  const razasPaginadas = filtrarRazas().slice(
    (paginaActual - 1) * porPagina,
    paginaActual * porPagina
  );

  return {
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
  };
};

export default useRazas;
