import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../feacture/landing/pages/Home";
import { DashboardAdminUsers } from "../feacture/dashboardAdmin/dashboardAdminPages/dashboardAdminUsers";
import { DashboardAdminRoles } from "../feacture/dashboardAdmin/dashboardAdminPages/DashboardAdminRoles";
import { DashboardAdminProductos } from "../feacture/dashboardAdmin/dashboardAdminPages/DashboardAdminProductos";
import { AnimatePresence } from "framer-motion";

export const Routers = () => {
  return (
   <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
       <Route path="/" element={<Home />} />
       <Route path="/usuarios" element={<DashboardAdminUsers />} />
       <Route path="/roles" element={<DashboardAdminRoles />} />
       <Route path="/productos" element={<DashboardAdminProductos />} />
    </Routes>

   </AnimatePresence>
  );
};
