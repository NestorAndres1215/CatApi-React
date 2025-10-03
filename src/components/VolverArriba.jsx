import React, { useState, useEffect } from "react";
import "../styles/VolverArriba.css"; // Import your custom CSS

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
      ↑
    </button>
  ) : null;
};

export default VolverArriba;
