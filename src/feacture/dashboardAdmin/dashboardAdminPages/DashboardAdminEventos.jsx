import React, { useEffect, useState } from "react";
import { DashboardAdminLayout } from "../dashboardAdminLayout/dashboardAdminLayout";

import axios from "axios";
import { Eye, Pencil, Trash2 } from "lucide-react";
export const DashboardAdminEventos = () => {

     const [eventos, setEventos] = useState([])

    // Obtener todos los Eventos
    const getEventos = async () => {
        try {
<<<<<<< HEAD
            const response = await axios.get('http://localhost:3000/eventos');
            console.log(response.data.autos);
=======
            const response = await axios.get('https://apiautoscrud-1.onrender.com/eventos');
            console.log('eventos', response.data);
>>>>>>> ed8302cfa6ec535a6c4b22f3b1058e000b8a9676
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

                        <p className="w-[5%]">ID</p>
                        <p className="w-[15%]">Imagen</p>
                        <p className="w-[15%]">Evento</p>
                        <p className="w-[10%]">Fecha</p>
                        <p className="w-[10%]">Lugar</p>
                        <p className="w-[10%]">Direccion</p>
                        <p className="w-[10%]">Patrocinadores</p>
                        <p className="w-[5%]">Hora</p>
                        <p className="w-[15%]">Acciones</p>
                    </article>

                    {/* Mapeo */}
                    

                    {eventos.map((element) => (
                        <article key={element.id} className="py-[20px] border-b border-black/20 flex items-center">
                        <p className="w-[5%]">{element.id}</p>
                        <img className="w-[150px] h-[150px]" src={element.ImgE}  />
                        <p className="w-[10%] underline italic">{element.Evento}</p>
                        <p className="w-[10%]">{element.Fecha}</p>
                        <p className="w-[10%]">{element.Lugar}</p>
                        <p className="w-[10%]">{element.Dirección}</p>
                        <p className="w-[10%]">{element.Patrocinadores}</p>
                        <p className="w-[10%]">{element.Hora}</p>
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