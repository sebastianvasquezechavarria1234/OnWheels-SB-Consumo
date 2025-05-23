import React, { useEffect, useState } from "react";
import { DashboardAdminLayout } from "../dashboardAdminLayout/dashboardAdminLayout";
import { BadgeCheck } from "lucide-react";
import axios from "axios";

export const DashboardAdminProductos = () => {

     const [usuarios, setUsuarios] = useState([])

    // Obtener todos los usuarios
    const getUsuarios = async () => {
        try {
            const response = await axios.get('https://apiautoscrud-1.onrender.com/usuarios');
            console.log('Usuarios:', response.data);
            setUsuarios(response.data)
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };

    // Llamar la API solo una vez al montar el componente
    useEffect(() => {
        getUsuarios();
    }, []); // <-- el array vacío asegura que se ejecute solo una vez


    return (
        <DashboardAdminLayout>
            <section className="relative w-[100%] bg-[var(--gray-bg-body)] side_bar">
                <h1 className="sticky top-0 bg-[var(--gray-bg-body)] p-[30px] shadow-[0px_20px_20px_var(--gray-bg-body)] font-secundaria">Productos</h1>

                {/* Tabla */}

                <div className="p-[30px]">
                    <article className=" mt-[120px] flex items-center border-b border-black/20 pb-[20px]">
                        <p className="w-[5%]">ID</p>
                        <p className="w-[20%]">Nombre</p>
                        <p className="w-[30%]">Correo electonico</p>
                        <p className="w-[10%]">Telefono</p>
                        <p className="w-[20%]">Rol</p>
                        <p className="w-[15%]">Acciones</p>
                    </article>

                    {/* Mapeo */}
                    {usuarios.map((element) => (

                        <article className=" py-[20px] border-b border-black/20 flex items-center">
                            <p className="w-[5%]">{element.id}</p>
                            <div className="w-[20%]">
                                <p className="font-bold text-black/80! italic">{element.nombre}</p>
                                <p>{element.apellidos}</p>

                            </div>
                            <p className="w-[30%] underline italic">{element.email}</p>
                            <p className="w-[10%]">{element.telefono}</p>
                            <div className="w-[20%]">
                                <p className="inline-flex gap-[5px] text-blue-700! bg-blue-100 px-[8px] rounded-full">

                                    {element.rol}
                                </p>
                            </div>
                            <p className="w-[15%]">Acciones</p>
                        </article>
                    ))}

                </div>



            </section>
        </DashboardAdminLayout>


    )
}