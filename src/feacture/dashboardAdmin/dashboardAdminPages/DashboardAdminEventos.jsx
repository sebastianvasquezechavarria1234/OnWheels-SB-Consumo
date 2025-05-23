import React, { useEffect, useState } from "react";
import { DashboardAdminLayout } from "../dashboardAdminLayout/dashboardAdminLayout";
import { BadgeCheck } from "lucide-react";
import axios from "axios";

export const DashboardAdminEventos = () => {

     const [usuarios, setEventos] = useState([])

    // Obtener todos los Eventos
    const getUsuarios = async () => {
        try {
            const response = await axios.get('http://localhost:3000/eventos');
            console.log('Eventos:', response.data);
            setUsuarios(response.data)
        } catch (error) {
            console.error('Error al obtener Eventos:', error);
        }
    };

    // Llamar la API solo una vez al montar el componente
    useEffect(() => {
        getUsuarios();
    }, []); // <-- el array vacío asegura que se ejecute solo una vez


    return (
        <DashboardAdminLayout>
            <section className="relative w-[100%] bg-[var(--gray-bg-body)] side_bar">
                <h1 className="sticky top-0 bg-[var(--gray-bg-body)] p-[30px] shadow-[0px_20px_20px_var(--gray-bg-body)] font-secundaria">Roles</h1>

                {/* Tabla */}

                <div className="p-[30px]">
                    <article className=" mt-[120px] flex items-center border-b border-black/20 pb-[20px]">

                        <p className="w-[5%]">ID</p>
                        <p className="w-[5%]">Imagen</p>
                        <p className="w-[20%]">Evento</p>
                        <p className="w-[30%]">Fecha</p>
                        <p className="w-[10%]">Lugar</p>
                        <p className="w-[20%]">Direccion</p>
                        <p className="w-[5%]">Patrocinadores</p>
                        <p className="w-[5%]">Hora</p>
                        <p className="w-[15%]">Acciones</p>
                    </article>

                    {/* Mapeo */}
                    {usuarios.map((element) => (

                        <article className=" py-[20px] border-b border-black/20 flex items-center">
                            <p className="w-[5%]">{element.id}</p>
                            <div className="w-[20%]">
                                <img >{element.ImgE}</img>
                                

                            </div>
                            <p className="w-[30%] underline italic">{element.Evento}</p>
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