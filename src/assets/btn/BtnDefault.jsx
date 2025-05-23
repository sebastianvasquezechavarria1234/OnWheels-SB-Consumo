import React from "react";
import { Link, useLocation } from "react-router-dom";

export const BtnDefault = ({ to, style, children, title }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`group dashboard__btn--sideBard flex gap-[10px] items-center py-[5px] ${style}`}>
      
      {/* Icono */}
      <span className={`w-[55px] h-[55px] flex justify-center items-center rounded-full border border-black/5 duration-200
        ${isActive ? 'bg-[#333] text-white' : 'bg-gray-100 group-hover:bg-[#333] group-hover:text-white'}
      `}>
        {children}
      </span>

      {/* Animación */}
      <ul className="relative block overflow-hidden">
        <li className="group-hover:translate-y-[-100%] duration-200">{title}</li>
        <li className="absolute top-[100%] group-hover:top-[0%] duration-200">{title}</li>
      </ul>
    </Link>
  );
};
