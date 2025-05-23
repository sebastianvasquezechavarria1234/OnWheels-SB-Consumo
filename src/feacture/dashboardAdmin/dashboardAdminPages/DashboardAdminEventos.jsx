import React, { useEffect, useState } from "react";
import { DashboardAdminLayout } from "../dashboardAdminLayout/dashboardAdminLayout";

import axios from "axios";
export const DashboardAdminEventos = () => {

     const [eventos, setEventos] = useState([])

    // Obtener todos los Eventos
    const getEventos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/eventos');
            console.log(response.data.autos);
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
                        <p className="w-[15%]">Acciones</p>
                        </article>
                    ))}


                </div>



            </section>
        </DashboardAdminLayout>


    )
}