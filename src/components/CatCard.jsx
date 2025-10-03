import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken, faInfoCircle } from "@fortawesome/free-solid-svg-icons"; // Importa el icono de info
import "../styles/CatCard.css"; // Importa tu CSS personalizado

const CatCard = ({ raza, toggleFavorito, isFavorito, abrirModal }) => {
  const imagenURL = raza.reference_image_id
    ? `https://cdn2.thecatapi.com/images/${raza.reference_image_id}.jpg`
    : "https://via.placeholder.com/400x300?text=Sin+Imagen";

  return (
    <div className="cat-card">
      <img
        src={imagenURL}
        alt={raza.name}
        className="cat-card-img"
      />
      <div className="cat-card-content">
        <h3 className="cat-card-title">{raza.name}</h3>
        <p className="cat-card-info">
          Origen: {raza.origin} | Vida: {raza.life_span} años
        </p>
        <div className="cat-card-actions">
          {/* Botón de favoritos con el icono de corazón */}
          <button className="fav-btn" onClick={() => toggleFavorito(raza.id)}>
            <FontAwesomeIcon
              icon={isFavorito ? faHeart : faHeartBroken}
              size="lg"
              style={{ color: isFavorito ? "red" : "gray" }}
            />
          </button>
          {/* Botón de ver detalle con el icono de info */}
          <button className="detail-btn" onClick={() => abrirModal(raza)}>
            <FontAwesomeIcon icon={faInfoCircle} size="lg" style={{ marginRight: "8px" }} />
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
