import React, { useEffect, useState } from "react";
import { DashboardAdminLayout } from "../dashboardAdminLayout/dashboardAdminLayout";
import { BadgeCheck, Eye, Pencil, Trash2 } from "lucide-react";
import axios from "axios";

export const DashboardAdminUsers = () => {

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
    }, []);


    return (
        <DashboardAdminLayout>
            <section className="relative w-[100%] bg-[var(--gray-bg-body)] side_bar">
                <h1 className="sticky top-0 bg-[var(--gray-bg-body)] p-[30px] shadow-[0px_20px_20px_var(--gray-bg-body)] font-secundaria">Usuarios</h1>

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
                                <p
                                    className={`inline-flex gap-[5px] px-[8px] rounded-full ${element.rol === "Administrador" ? "text-purple-700! bg-purple-100" :
                                        element.rol === "Usuario" ? "text-green-700! bg-green-100" :
                                            element.rol === "Estudiante" ? "text-yellow-700! bg-yellow-100" :
                                                element.rol === "Instructor" ? "text-red-700! bg-red-100" :
                                                    "text-gray-700! bg-gray-100"
                                        }`}
                                >
                                    {element.rol}
                                </p>


                            </div>
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