import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../feacture/landing/pages/Home";
import { DashboardAdminUsers } from "../feacture/dashboardAdmin/dashboardAdminPages/dashboardAdminUsers";


export const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>


  
            <Route path="/admin-users" element={<DashboardAdminUsers/>}/>
        </Routes>
    )
}