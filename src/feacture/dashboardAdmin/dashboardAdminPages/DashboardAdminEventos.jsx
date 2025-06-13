import React, { useEffect, useState } from "react";
import { DashboardAdminLayout } from "../dashboardAdminLayout/dashboardAdminLayout";
import axios from "axios";
import { Eye, Pencil, Trash2 } from "lucide-react";

export const DashboardAdminEventos = () => {
	const [eventos, setEventos] = useState([]);

	const getEventos = async () => {
		try {
			const response = await axios.get("https://onwheels-sb-api-3.onrender.com/api/eventos");
			setEventos(response.data);
		} catch (error) {
			console.error("Error al obtener Eventos:", error);
		}
	};

	useEffect(() => {
		getEventos();
	}, []);

	return (
		<DashboardAdminLayout>
			<section className="relative w-full bg-[var(--gray-bg-body)] side_bar">
				<h1 className="sticky top-0 z-50 bg-[var(--gray-bg-body)] p-[30px] pb-[80px] shadow-[0px_20px_20px_var(--gray-bg-body)] font-secundaria">
					Eventos
				</h1>

				<div className="px-[30px]">
					<div className="sticky top-[120px] z-50">
						{/* Header */}
						<article className="mt-[120px]  flex items-center border-b border-black/20 pb-[20px] font-semibold italic">
							<p className="w-[30%]">Evento</p>
							<p className="w-[15%]">Dirección</p>
							<p className="w-[10%]">Hora</p>
							<p className="w-[15%]">Patrocinadores</p>
							<p className="w-[15%]">Estado</p>
							<p className="w-[15%]">Acciones</p>
						</article>

					</div>

					{/* Lista de eventos */}
					{eventos.map((element) => (
						<article key={element.id} className="py-[30px] border-b border-black/20 flex items-center">

							{/* Imagen + Evento + Fecha */}
							<div className="w-[30%] flex items-center gap-[15px]">
								<picture className="w-[55px] h-[55px] rounded-full bg-red-100 overflow-hidden">
									<img className="w-full h-full object-cover object-center" src={element.imagen} alt="Evento" />
								</picture>
								<div className="flex flex-col">
									<p className="font-semibold italic line-clamp-1">{element.nombre}</p>
									<p className="line-clamp-1">{element.ubicacion}</p>
								</div>
							</div>
							<p className="w-[15%] line-clamp-1">{element.direccion}</p>
							<p className="w-[10%] line-clamp-1">{element.hora}</p>
							<p className="w-[15%] line-clamp-1 pr-[10px]">
								{element.patrozinador}
							</p>
							<div className="w-[15%]">
								<p
									className={`inline-flex items-center gap-[5px] px-[15px] py-[7px] rounded-full ${element.role === "Administrador"
										? "text-purple-700! bg-purple-100"
										: element.estado === "Programado"
											? "text-green-700! bg-green-100"
											: element.estado === "Finalizado"
												? "text-yellow-700! bg-yellow-100"
												: element.estado === "Cancelado"
													? "text-red-700! bg-red-100"
													: "text-gray-700! bg-gray-200"
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
