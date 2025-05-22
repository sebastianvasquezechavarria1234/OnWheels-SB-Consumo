import axios from "axios";
import React, { useEffect, useState } from "react";

export const Home = () => {

    const [users, setUsers] = useState([]) 

    useEffect(() => {
        axios.get("http://localhost:3000/users/")
        .then((res) => {
            console.log(res.data)
            setUsers(res.data)
        })

    },[])
    return (
        <section className="max-w-[1200px] mx-auto pt-[120px]">
            <h1 className="max-w-[700px] font-secundaria">Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae perspiciatis illo quis rem alias ullam modi repellendus dolorem dicta reiciendis, maxime itaque voluptate ratione quasi eum! Pariatur corrupti ipsa maxime?</p>




        </section>
    )
}