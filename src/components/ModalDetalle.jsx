import React from "react";
import "../styles/ModalDetalle.css"; // Asegúrate de importar tus estilos
import 'font-awesome/css/font-awesome.min.css';

const ModalDetalle = ({ open, handleClose, raza }) => {
  if (!raza || !open) return null;

  const imagenURL = raza.reference_image_id
    ? `https://cdn2.thecatapi.com/images/${raza.reference_image_id}.jpg`
    : "https://via.placeholder.com/400x300?text=Sin+Imagen";

  return (
    <div className={`modal ${open ? "open" : ""}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={imagenURL}
          alt={raza.name}
          className="modal-img"
        />
        <h2 className="modal-title">{raza.name}</h2>
        <p className="modal-info">
          Origen: {raza.origin} | Vida: {raza.life_span} años
        </p>
        <hr />
        <h3>Descripción</h3>
        <p>{raza.description}</p>
        <h3>Temperamento</h3>
        <p>{raza.temperament}</p>

        <div className="modal-buttons">
          <button
            className="modal-btn"
            onClick={() => window.open(raza.wikipedia_url, "_blank")}
          >
            <i className="fas fa-external-link-alt"></i> Wikipedia
          </button>
          <button className="modal-close-btn" onClick={handleClose}>
            <i className="fas fa-times"></i> Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetalle;
