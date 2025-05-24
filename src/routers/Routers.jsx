import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../feacture/landing/pages/Home";
import { DashboardAdminUsers } from "../feacture/dashboardAdmin/dashboardAdminPages/dashboardAdminUsers";
import { DashboardAdminEventos } from "../feacture/dashboardAdmin/dashboardAdminPages/DashboardAdminEventos";
import { DashboardAdminProductos } from "../feacture/dashboardAdmin/dashboardAdminPages/DashboardAdminProductos";
import { AnimatePresence } from "framer-motion";
import { DashboardAdminClases } from "../feacture/dashboardAdmin/dashboardAdminPages/DashboaedAdminClases";

export const Routers = () => {
  return (
   <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
       <Route path="/" element={<Home />} />
       <Route path="/usuarios" element={<DashboardAdminUsers />} />
       <Route path="/eventos" element={<DashboardAdminEventos />} />
       <Route path="/productos" element={<DashboardAdminProductos/>} />
       <Route path="/clases" element={<DashboardAdminClases />} />
    </Routes>

   </AnimatePresence>
  );
};
