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
				"https://onwheels-sb-api-3.onrender.com/api/usuarios"
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
			<section className="pr-[10px] relative w-[100%] bg-[var(--gray-bg-body)]">
				<h1 className="sticky top-0 z-50 bg-[var(--gray-bg-body)] p-[30px] pb-[80px] shadow-[0px_20px_20px_var(--gray-bg-body)] font-secundaria">
					Usuarios
				</h1>

				{/* Contenedor header y list */}
				<div className="px-[30px]">
					{/* header tabla */}
					<div className="sticky top-[120px] z-50">
						<article className=" font-semibold italic mt-[120px] flex items-center border-b border-black/20 pb-[20px]">
							<p className="w-[20%]">Nombre</p>
							<p className="w-[30%]">Correo electonico</p>
							<p className="w-[15%]">Telefono</p>
							<p className="w-[20%]">Rol</p>
							<p className="w-[15%]">Acciones</p>
						</article>

					</div>

					{/* Colores aleatorios para el avatar */}
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
						const inicial = element.name?.charAt(0).toUpperCase() || "?";

						// Lista
						return (
							<article
								key={element.id}
								className="py-[30px] border-b border-black/20 flex items-center"
							>
								<div className="w-[20%] flex gap-[15px] items-center">
									{/* Avatar */}
									<span className={`relative w-[55px] h-[55px] ${color.fondo} ${color.texto} rounded-full flex justify-center items-center font-secundaria text-[2rem]`}>
										<h5 className="font-secundaria">
											{inicial}
										</h5>
									</span>
									<div className="flex flex-col">
										<p className="font-bold text-black/80 italic">{element.name}</p>
										<p>{element.lastName}</p>
									</div>
								</div>
								<p className="w-[30%] underline italic ">{element.email}</p>
								<p className="w-[15%]">{element.phone}</p>
								<div className="w-[20%]">
									<p
										className={`inline-flex items-center gap-[5px] px-[15px] py-[7px] rounded-full ${element.role === "Administrador"
												? "text-purple-700! bg-purple-100"
												: element.role === "Usuario"
												? "text-green-700! bg-green-100"
												: element.role === "Estudiante"
												? "text-yellow-700! bg-yellow-100"
												: element.role === "Instructor"
												? "text-red-700! bg-red-100"
												: "text-gray-700! bg-gray-200"
											}`}
									>
										<span className="w-[10px] h-[10px] block bg-[currentColor] rounded-full"></span>
										{element.role}
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
						);
					})}

				</div>


			</section>
		</DashboardAdminLayout>
	);
};
