import React, { useEffect, useState } from "react";
import { DashboardAdminLayout } from "../dashboardAdminLayout/dashboardAdminLayout";
import axios from "axios";
import { Eye, Pencil, Trash2 } from "lucide-react";

export const DashboardAdminClases = () => {
    const [Clases, setClases] = useState([]);

    const getClases = async () => {
        try {
            const response = await axios.get("https://apiautoscrud-1.onrender.com/clases");
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
                    <article className="grid grid-cols-7 gap-4   bg-gray-100 border-b border-black/20 pb-4 font-semibold">
                        <p className="text-center">ID</p>
                        <p className="text-left">Nombre de la clase</p>
                        <p className="text-left">Instructor</p>
                        <p className="text-left">Sede</p>
                        <p className="text-left">Horario</p>
                        <p className="text-left">Estado</p>
                        <p className="text-left">Acciones</p>
                    </article>

                    {/* Lista de Clases */}
                    {Clases.map((element) => (
                        <article key={element.id} className="grid grid-cols-7  gap-4 items-center py-4 border-b border-black/20">
                            <p className="text-center">{element.id}</p>
                            <p className="italic font-semibold">{element.Nombre}</p>
                            <p>{element.Instructor}</p>
                            <p>{element.Sede}</p>
                            <p>{element.Horario}</p>
                            <p className="text-green-700! bg-green-100 text-center rounded-full">{element.Estado}</p>
                            <div className="flex gap-2 justify-start">
                                <span className="w-[40px] h-[40px] bg-green-100 text-green-700 flex justify-center items-center rounded-[14px] border border-green-200 shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer">
                                    <Eye size={22} strokeWidth={1.3} />
                                </span>
                                <span className="w-[40px] h-[40px] bg-blue-100 text-blue-700 flex justify-center items-center rounded-[14px] border border-blue-200 shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer">
                                    <Pencil size={22} strokeWidth={1.3} />
                                </span>
                                <span className="w-[40px] h-[40px] bg-red-100 text-red-700 flex justify-center items-center rounded-[14px] border border-red-200 shadow-md hover:scale-125 transition-transform duration-300 cursor-pointer">
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
