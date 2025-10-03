import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

const VolverArriba = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible ? (
    <Fab
      color="primary"
      sx={{ position: "fixed", bottom: 20, right: 20 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <KeyboardArrowUp />
    </Fab>
  ) : null;
};

export default VolverArriba;
