import React from "react";
import { Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* Necesitamos key para que detecte el cambio de ruta */}
      <Routes location={location} key={location.pathname}>
        {children}
      </Routes>
    </AnimatePresence>
  );
};
