import React from "react";
import { Home, Shield, Shirt, Users } from "lucide-react";
import { BtnDefault } from "../../../assets/btn/BtnDefault";
import { motion } from "framer-motion";

export const DashboardAdminLayout = ({ children }) => {
  return (
    <main
      className="w-full h-screen flex gap-[10px] overflow-x-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Sidebar */}
      <nav className="w-[20%] p-[30px] border-r border-black/20  z-10">
        <h1 className="mb-[20px] border-b pb-[30px] border-black/20 font-secundaria">
          Consumo Api
        </h1>
        <ul className="flex flex-col">
          <li>
            <BtnDefault to="" style="" title="Dashboard">
              <Home size={23} strokeWidth={1.3} />
            </BtnDefault>
          </li>
          <li>
            <BtnDefault to="/usuarios" style="" title="Usuarios">
              <Users size={23} strokeWidth={1.5} />
            </BtnDefault>
          </li>
          <li>
            <BtnDefault to="/roles" style="" title="Roles">
              <Shield size={23} strokeWidth={1.5} />
            </BtnDefault>
          </li>
          <li>
            <BtnDefault to="/productos" style="" title="Productos">
              <Shirt size={23} strokeWidth={1.5} />
            </BtnDefault>
          </li>
        </ul>
      </nav>

      {/* Contenido animado con entrada y salida mejoradas */}
      <motion.section
        className="w-[80%] hide-scrollbar"
        initial={{
          opacity: 0,
          scale: 0.3,
          rotateX: -45,
          rotateY: 10,
          filter: "blur(20px)",
          transformOrigin: "center center",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          scale: 0.6,
          rotateX: 30,
          rotateY: -20,
          filter: "blur(25px)",
        }}
        transition={{
          delay: 0.1,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          height: "100%",
          overflowY: "auto", // Scroll funcional
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.section>
    </main>
  );
};
