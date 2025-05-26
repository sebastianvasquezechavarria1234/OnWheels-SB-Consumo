import React, { useEffect, useState } from "react";
import { DashboardAdminLayout } from "../dashboardAdminLayout/dashboardAdminLayout";
import axios from "axios";
import { Eye, Pencil, Trash2 } from "lucide-react";

export const DashboardAdminProductos = () => {
	const [productos, setProductos] = useState([]);

	const getProductos = async () => {
		try {
			const response = await axios.get("https://apiautoscrud-1.onrender.com/productos");
			setProductos(response.data);
		} catch (error) {
			console.error("Error al obtener productos:", error);
		}
	};

	useEffect(() => {
		getProductos();
	}, []);

	return (
		<DashboardAdminLayout>
			<section className="relative w-full bg-[var(--gray-bg-body)] side_bar">
				<h1 className="sticky top-0 bg-[var(--gray-bg-body)] p-[30px] shadow-[0px_20px_20px_var(--gray-bg-body)] font-secundaria">
					Productos
				</h1>

				<div className="p-[30px]">
					{/* Encabezados */}
					<article className="font-semibold italic  mt-[120px] flex items-center border-b border-black/20 pb-[20px]">
						<p className="w-[3%]">ID</p>
						<p className="w-[30%]">producto</p>

						<p className="w-[15%]">Precio</p>
						<p className="w-[15%]">Stock</p>
						<p className="w-[23%]">Categoría</p>
						<p className="w-[15%]">Acciones</p>
					</article>

					{/* Lista de productos */}
					{productos.map((producto) => (
						<article key={producto.id} className="py-[20px] border-b border-black/20 flex items-center">
							<p className="w-[3%]">{producto.id}</p>

							{/* Imagen + nombre */}
							<div className="w-[30%] flex items-center gap-[15px]">
								<picture className="w-[55px] h-[55px] rounded-full bg-gray-200 overflow-hidden">
									<img className="w-full h-full object-cover object-center" src={producto.url_imagen} alt="Producto" />
								</picture>
								<div className="flex flex-col">
									<p className="font-semibold italic line-clamp-1">{producto.Nombre}</p>
								</div>
							</div>

							<p className="w-[15%]">${producto.Precio}</p>
							<p className="w-[15%]">{producto.Stock}</p>
							<p className="w-[23%]">{producto.Categoría}</p>
							{/* Acciones */}
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
					))}
				</div>
			</section>
		</DashboardAdminLayout>
	);
};
