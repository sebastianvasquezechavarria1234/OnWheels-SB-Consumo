import React, { useEffect, useState } from "react";
import { DashboardAdminLayout } from "../dashboardAdminLayout/dashboardAdminLayout";
import { Eye, Pencil, Trash2 } from "lucide-react";
import axios from "axios";

export const DashboardAdminUsers = () => {
	const [usuarios, setUsuarios] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

	const getUsuarios = async () => {
		try {
			const response = await axios.get(
				"https://apiautoscrud-1.onrender.com/usuarios"
			);
			setUsuarios(response.data);
		} catch (error) {
			console.error("Error al obtener usuarios:", error);
		}
	};

	useEffect(() => {
		getUsuarios();
	}, []);

	return (
		<DashboardAdminLayout>
			<section className="relative w-[100%] bg-[var(--gray-bg-body)] side_bar">
				<h1 className="sticky top-0 z-50 bg-[var(--gray-bg-body)] p-[30px] shadow-[0px_20px_20px_var(--gray-bg-body)] font-secundaria">
					Usuarios
				</h1>

				<div className="p-[30px]">
					<article className="mt-[120px]  bg-gray-100  flex items-center border-b border-black/20 pb-[20px]">
						<p className="w-[3%]">ID</p>
						<p className="w-[20%]">Nombre</p>
						<p className="w-[30%]">Correo electonico</p>
						<p className="w-[10%]">Telefono</p>
						<p className="w-[20%]">Rol</p>
						<p className="w-[15%]">Acciones</p>
					</article>

					{usuarios.map((element) => {
						const colores = [
							{ fondo: "bg-red-100", texto: "text-red-700" },
							{ fondo: "bg-green-100", texto: "text-green-700" },
							{ fondo: "bg-blue-100", texto: "text-blue-700" },
							{ fondo: "bg-yellow-100", texto: "text-yellow-700" },
							{ fondo: "bg-purple-100", texto: "text-purple-700" },
							{ fondo: "bg-pink-100", texto: "text-pink-700" },
							{ fondo: "bg-indigo-100", texto: "text-indigo-700" },
							{ fondo: "bg-teal-100", texto: "text-teal-700" },
							{ fondo: "bg-orange-100", texto: "text-orange-700" },
						];

						const color = colores[element.id % colores.length];
						const inicial = element.nombre?.charAt(0).toUpperCase() || "?";

						return (
							<article
								key={element.id}
								className="py-[20px] border-b border-black/20 flex items-center"
							>
								<p className="w-[3%]">{element.id}</p>
								<div className="w-[20%] flex gap-[15px] items-center">
									{/* Avatar */}
									<span className={`relative w-[55px] h-[55px] ${color.fondo} ${color.texto} rounded-full flex justify-center items-center font-secundaria text-[2rem]`}>
										<h5 className="font-secundaria">
											{inicial}
										</h5>
									</span>
									<div className="flex flex-col">
										<p className="font-bold text-black/80 italic">{element.nombre}</p>
										<p>{element.apellidos}</p>
									</div>
								</div>
								<p className="w-[30%] underline italic ">{element.email}</p>
								<p className="w-[10%]">{element.telefono}</p>
								<div className="w-[20%]">
									<p
										className={`inline-flex gap-[5px] px-[8px] rounded-full ${element.rol === "Administrador"
												? "text-purple-700! bg-purple-100"
												: element.rol === "Usuario"
												? "text-green-700! bg-green-100"
												: element.rol === "Estudiante"
												? "text-yellow-700! bg-yellow-100"
												: element.rol === "Instructor"
												? "text-red-700! bg-red-100"
												: "text-gray-700! bg-gray-100"
											}`}
									>
										{element.rol}
									</p>
								</div>
								<div className="w-[15%] flex gap-[10px] items-center">
									<span
										className="w-[40px] h-[40px] bg-green-100 text-green-700 flex justify-center items-center rounded-[14px] cursor-pointer border border-green-200 shadow-md hover:scale-[1.25] transition-transform"
										style={{
											transitionDuration: "450ms",
											transitionTimingFunction: "cubic-bezier(0.3, 1.8, 0.4, 1)",
										}}
									>
										<Eye size={22} strokeWidth={1.3} />
									</span>
									<span
										className="w-[40px] h-[40px] bg-blue-100 text-blue-700 flex justify-center items-center rounded-[14px] cursor-pointer border border-blue-200 shadow-md hover:scale-[1.25] transition-transform"
										style={{
											transitionDuration: "450ms",
											transitionTimingFunction: "cubic-bezier(0.3, 1.8, 0.4, 1)",
										}}
									>
										<Pencil size={22} strokeWidth={1.3} />
									</span>
									<span
										className="w-[40px] h-[40px] bg-red-100 text-red-700 flex justify-center items-center rounded-[14px] cursor-pointer border border-red-200 shadow-md hover:scale-[1.25] transition-transform"
										style={{
											transitionDuration: "450ms",
											transitionTimingFunction: "cubic-bezier(0.3, 1.8, 0.4, 1)",
										}}
									>
										<Trash2 size={22} strokeWidth={1.3} />
									</span>
								</div>
							</article>
						);
					})}

				</div>


			</section>
		</DashboardAdminLayout>
	);
};
