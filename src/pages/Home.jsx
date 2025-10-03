import React from "react";
import CatGallery from "../components/CatGallery";
import "../styles/Home.css"; // Keep the import for your custom CSS

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">🐱 Galería de Gatitos</h1>
        <p className="subtitle">
          Explora diferentes razas de gatos, descubre sus características y encuentra tu favorito.
        </p>
      </div>
      <CatGallery />
    </div>
  );
};

export default Home;
