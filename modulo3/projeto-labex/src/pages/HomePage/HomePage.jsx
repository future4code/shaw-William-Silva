import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()

    const goToListTrip = () => {
        navigate("/listagem")
    }

    const goToLogin = () => {
        navigate("/login")
    }

    return (
        <div>
            <h1>SOU A HOME PAGE</h1>
            <button onClick={goToListTrip} >Ver Viagens</button>
            <button onClick={goToLogin} >Área de Admin</button>
        </div>
    )
}