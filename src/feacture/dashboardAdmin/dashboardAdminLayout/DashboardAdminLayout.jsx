import React from "react";
import { Home, LayoutDashboard, Shield, Shirt, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const DashboardAdminLayout = ({ children }) => {
	return (
		<>
			<main className="w-full h-screen flex gap-[10px] p-[10px] bg-[var(--blue-light)]">
				{/* SideBar */}
				<nav className="w-[20%] p-[30px]">
				<h1 className="mb-[20px]  border-b pb-[20px] border-black/30">
					OnWheels SB
				</h1>
					<ul className="flex flex-col gap-[5px]">
						<li>
							{/* Enlace */}
							<Link 
								to=""
								className="flex gap-[10px] items-center bg-transparent p-[5px] rounded-full">
								{/* Icon */}
								<span className="w-[55px] h-[55px] flex justify-center items-center rounded-full bg-gray-200 border border-black/5">
									<Home
										size={23} 
										color="black" 
										strokeWidth={1.2} />
								</span>
								Dashboard
							</Link>
						</li>						
						<li>
							{/* Enlace */}
							<Link 
								to=""
								className="flex gap-[10px] items-center p-[3px] rounded-full">
								{/* Icon */}
								<span className="w-[55px] h-[55px] flex justify-center items-center rounded-full bg-[#333] border border-black/5">
									<Users 
										size={23} 
										color="white" 
										strokeWidth={1.5} />
								</span>
								Usuarios
							</Link>
						</li>
						<li>
							{/* Enlace */}
							<Link 
								to=""
								className="flex gap-[10px] items-center bg-transparent p-[5px] rounded-full">
								{/* Icon */}
								<span className="w-[55px] h-[55px] flex justify-center items-center rounded-full bg-gray-200 border border-black/5">
									<Shield
										size={23} 
										color="black" 
										strokeWidth={1.5} />
								</span>
								Roles
							</Link>
						</li>
						<li>
							{/* Enlace */}
							<Link 
								to=""
								className="flex gap-[10px] items-center bg-transparent p-[5px] rounded-full">
								{/* Icon */}
								<span className="w-[55px] h-[55px] flex justify-center items-center rounded-full bg-gray-200 border border-black/5">
									<Shirt 
										size={23} 
										color="black" 
										strokeWidth={1.5} />
								</span>
								Productos
							</Link>
						</li>
					</ul>

				</nav>
				{children}
			</main>
		</>
	);
};
