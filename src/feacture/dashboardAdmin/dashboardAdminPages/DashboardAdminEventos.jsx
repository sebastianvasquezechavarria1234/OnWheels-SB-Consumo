import React, { useEffect, useState } from "react";
import { DashboardAdminLayout } from "../dashboardAdminLayout/dashboardAdminLayout";

import axios from "axios";
import { Eye, Pencil, Trash2 } from "lucide-react";
export const DashboardAdminEventos = () => {

     const [eventos, setEventos] = useState([])

    // Obtener todos los Eventos
    const getEventos = async () => {
        try {
            const response = await axios.get('https://apiautoscrud-1.onrender.com/eventos');
            console.log('eventos', response.data);
            setEventos(response.data)
        } catch (error) {
            console.error('Error al obtener Eventos:', error);
        }
    };

    // Llamar la API solo una vez al montar el componente
    useEffect(() => {
        getEventos();
    }, []); // <-- el array vacío asegura que se ejecute solo una vez


    return (
        <DashboardAdminLayout>
            <section className="relative w-[100%] bg-[var(--gray-bg-body)] side_bar">
                <h1 className="sticky top-0 bg-[var(--gray-bg-body)] p-[30px] shadow-[0px_20px_20px_var(--gray-bg-body)] font-secundaria">Eventos</h1>

                {/* Tabla */}

                <div className="p-[30px]">
                    <article className=" mt-[120px] flex items-center border-b border-black/20 pb-[20px]">

                        <p className="w-[3%]">ID</p>
                        <p className="w-[30%]">Evento</p>
                        <p className="w-[15%]">Lugar</p>
                        <p className="w-[15%]">Direccion</p>
                        <p className="w-[15%]">Patrocinadores</p>
                        <p className="w-[7%]">Hora</p>
                        <p className="w-[15%]">Acciones</p>
                    </article>

                    {/* Mapeo */}
                    

                    {eventos.map((element) => (
                        <article key={element.id} className="py-[20px] border-b border-black/20 flex items-center">
                        <p className="w-[3%]">{element.id}</p>
                        {/* Contenedor avatar y title */}
                        <div className="w-[30%] flex items-center gap-[15px]">
                            <picture className=" w-[55px] h-[55px] rounded-full bg-red-600 overflow-hidden">
                                <img className="w-full h-full object-cover object-center" src={element.ImgE}  />
                            </picture>
                            <div className="flex flex-col">
                                <p className="font-semibold italic line-clamp-1">{element.Evento}</p>
                                <p className="line-clamp-1">{element.Fecha}</p>

                            </div>
                        </div>
                        <p className="w-[15%] line-clamp-1">{element.Lugar}</p>
                        <p className="w-[15%] line-clamp-1">{element.Dirección}</p>
                        <p className="w-[15%] line-clamp-1">{element.Patrocionadores}</p>
                        <p className="w-[7%] line-clamp-1">{element.Hora}</p>
                       <div className="w-[15%] flex gap-[10px] items-center">
                                {/* Icon ver */}
                                <span
                                    className="w-[40px] h-[40px] bg-green-100 text-green-700 flex justify-center items-center rounded-[14px] cursor-pointer border border-green-200 shadow-md hover:scale-[1.25] transition-transform"
                                    style={{
                                        transitionDuration: "450ms",
                                        transitionTimingFunction: "cubic-bezier(0.3, 1.8, 0.4, 1)"
                                    }}
                                >
                                    <Eye size={22} strokeWidth={1.3} />
                                </span>
                                {/* Icon delete */}
                                <span
                                    className="w-[40px] h-[40px] bg-blue-100 text-blue-700 flex justify-center items-center rounded-[14px] cursor-pointer border border-blue-200 shadow-md hover:scale-[1.25] transition-transform"
                                    style={{
                                        transitionDuration: "450ms",
                                        transitionTimingFunction: "cubic-bezier(0.3, 1.8, 0.4, 1)"
                                    }}
                                >
                                    <Pencil size={22} strokeWidth={1.3} />
                                </span>
                                {/* Icon delete */}
                                <span
                                    className="w-[40px] h-[40px] bg-red-100 text-red-700 flex justify-center items-center rounded-[14px] cursor-pointer border border-red-200 shadow-md hover:scale-[1.25] transition-transform"
                                    style={{
                                        transitionDuration: "450ms",
                                        transitionTimingFunction: "cubic-bezier(0.3, 1.8, 0.4, 1)"
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


    )
}