import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // Importamos el icono de flecha hacia arriba
import "../styles/VolverArriba.css"; // Importa tu CSS personalizado

const VolverArriba = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible ? (
    <button
      className="volver-arriba-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FontAwesomeIcon icon={faArrowUp} size="2x" />
    </button>
  ) : null;
};

export default VolverArriba;
