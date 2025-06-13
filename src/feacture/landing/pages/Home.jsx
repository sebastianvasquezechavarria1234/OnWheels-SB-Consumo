import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Key, Mail, TriangleAlert } from "lucide-react";
import React from "react";

export const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "admin123") {
            setErrorMessage("");
            navigate("/usuarios");
        } else {
            setErrorMessage("Los datos ingresados son incorrecto");
        }
    };

    return (
        <>
          
            <section className="max-w-[1200px] h-screen mx-auto flex items-center">
                {/* Banner */}
                <article className="flex items-center justify-center relative w-[65%] block p-[5px]">
                    <picture className="relative z-50 w-[250px] block h-[350px]">
                        <img className="w-full h-full object-cover" src="/banner.jpg" alt="Banner" />
                    </picture>
                    <picture className="absolute top-0 left-[17%] translate-y-[24px] rotate-[-10deg] w-[250px] block h-[350px]">
                        <img className="w-full h-full object-cover" src="/benner3.jpg" alt="Banner" />
                    </picture>
                    <picture className="absolute top-0 right-[17%] translate-y-[24px] rotate-[10deg] w-[250px] block h-[350px]">
                        <img className="w-full h-full object-cover" src="/bnner2.jpg" alt="Banner" />
                    </picture>
                </article>

                {/* Formulario */}
                <article className="w-[35%] flex justify-center items-center">
                    <form className="w-full" onSubmit={handleSubmit}>
                        <h1 className="text-center mb-[40px] font-secundaria">Iniciar sesión</h1>
                       

                        {/* Correo electrónico */}
                        <label className="relative block">
                            <p className="mb-[5px]">Correo electrónico</p>
                            <input
                                className="bg-[var(--gray)] pl-[55px] py-[17px] w-full mb-[20px] rounded-full border-1 border-black/10 outline-none"
                                type="email"
                                minLength={7}
                                maxLength={30}
                                placeholder="Por ejem: admin@gmail.com"
                                required
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setErrorMessage(""); // Limpiar mensaje al escribir
                                }}
                            />
                            <span className="absolute bottom-[36%] left-[6%]">
                                <Mail strokeWidth={1.2} size={21} />
                            </span>
                        </label>

                        {/* Contraseña */}
                        <label className="relative block">
                            <p className="mb-[5px]">Contraseña</p>
                            <input
                                className="bg-[var(--gray)] pl-[55px] py-[17px] w-full mb-[20px] rounded-full border-1 border-black/10 outline-none"
                                type="password"
                                minLength={7}
                                maxLength={30}
                                placeholder="Por ejem: admin123"
                                required
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrorMessage(""); // Limpiar mensaje al escribir
                                }}
                            />
                            <span className="absolute bottom-[37%] left-[6%]">
                                <Key strokeWidth={1.4} size={21} />
                            </span>
                        </label>

                        {/* Mensaje de error */}
                        {errorMessage && (
                            <p className="flex items-center gap-[10px] text-[14px]! text-red-700! bg-red-100 p-[20px] rounded-[20px] mb-[20px]">
                                <TriangleAlert strokeWidth={1.2} size={19} />
                                {errorMessage}
                            </p>
                        )}
                        {/* Botón de envío */}
                        <input
                            className="cursor-pointer hover:opacity-80 duration-200 bg-[#333] text-white uppercase px-[24px] py-[17px] w-full rounded-full border-1 border-black/10"
                            type="submit"
                            value="Iniciar sesión"
                        />

                    </form>
                </article>
            </section>
        </>
    );
};
