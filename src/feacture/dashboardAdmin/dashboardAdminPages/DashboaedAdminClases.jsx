import React, { useEffect, useState } from "react";
import { DashboardAdminLayout } from "../dashboardAdminLayout/dashboardAdminLayout";
import axios from "axios";
import { Eye, Pencil, Trash2 } from "lucide-react";

export const DashboardAdminClases = () => {
    const [Clases, setClases] = useState([]);

    const getClases = async () => {
        try {
            const response = await axios.get("https://onwheels-sb-api-3.onrender.com/api/clases");
            setClases(response.data);
        } catch (error) {
            console.error("Error al obtener Clases:", error);
        }
    };

    useEffect(() => {
        getClases();
    }, []);

    return (
        <DashboardAdminLayout>
            <section className="relative w-full bg-[var(--gray-bg-body)] side_bar">
                <h1 className="sticky top-0 bg-[var(--gray-bg-body)] p-[30px] shadow-[0px_20px_20px_var(--gray-bg-body)] font-secundaria">
                    Clases
                </h1>

                <div className="p-[30px]">
                    {/* Encabezados */}
                    <article className="font-semibold italic  mt-[120px] flex items-center border-b border-black/20 pb-[20px]">
                        <p className="w-[30%]">Nombre de la clase</p>
                        <p className="w-[10%]">Instructor</p>
                        <p className="w-[15%]">Sede</p>
                        <p className="w-[20%]">Horario</p>
                        <p className="w-[10%]">Estado</p>
                        <p className="w-[15%]">Acciones</p>
                    </article>

                    {/* Lista de Clases */}
                    {Clases.map((element) => (
                        <article key={element.id} className="py-[30px] border-b border-black/20 flex items-center">
                            <div className="w-[30%]">
                                <p className="italic font-semibold line-clamp-1">
                                    {element.nombre}
                                </p>
                                <p className="line-clamp-1">
                                    {element.descripcion}
                                </p>
                            </div>
                            <p className="w-[10%] line-clamp-1">{element.instructor}</p>
                            <p className="w-[15%] line-clamp-1">{element.ubicacion}</p>
                            <p className="w-[20%]">{element.horario}</p>
                            <div className="w-[10%]">
                                <p
                                    className={`inline-flex items-center gap-[5px] px-[15px] py-[7px] rounded-full ${
                                        element.estado === "activa"
                                        ? "text-green-700! bg-green-100"
                                        : element.estado === "no activa"
                                        
                                        
                                       
                                       
                                        }`}
                                >
                                    <span className="w-[10px] h-[10px] block bg-[currentColor] rounded-full"></span>
                                    {element.estado}
                                </p>
                            </div>
                            {/* Acciones icons */}
                            <div className="w-[15%] flex gap-[10px] items-center">
                                <span
                                    className="w-[45px] h-[45px] bg-green-100 text-green-700 flex justify-center items-center rounded-[18px] cursor-pointer border border-green-200 shadow-md hover:scale-[1.25] transition-transform"
                                    style={{
                                        transitionDuration: "450ms",
                                        transitionTimingFunction: "cubic-bezier(0.3, 1.8, 0.4, 1)",
                                    }}
                                >
                                    <Eye size={22} strokeWidth={1.3} />
                                </span>
                                <span
                                    className="w-[45px] h-[45px] bg-blue-100 text-blue-700 flex justify-center items-center rounded-[18px] cursor-pointer border border-blue-200 shadow-md hover:scale-[1.25] transition-transform"
                                    style={{
                                        transitionDuration: "450ms",
                                        transitionTimingFunction: "cubic-bezier(0.3, 1.8, 0.4, 1)",
                                    }}
                                >
                                    <Pencil size={22} strokeWidth={1.3} />
                                </span>
                                <span
                                    className="w-[45px] h-[45px] bg-red-100 text-red-700 flex justify-center items-center rounded-[18px] cursor-pointer border border-red-200 shadow-md hover:scale-[1.25] transition-transform"
                                    style={{
                                        transitionDuration: "450ms",
                                        transitionTimingFunction: "cubic-bezier(0.3, 1.8, 0.4, 1)",
                                    }}
                                >
                                    <Trash2 size={22} strokeWidth={1.3} />
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </DashboardAdminLayout>
    );
};
