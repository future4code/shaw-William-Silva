import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
    const navigate = useNavigate()

    const goToPrevious = () => {
        navigate("/login")
    }

    const goToCreateTrip = () => {
        navigate("/criar")
    }

    const logoutAccount = () => {
        navigate("/login")
    }

    return (
        <div>
            <h1>SOU A ADMIN PAGE</h1>
            <button onClick={goToPrevious} >Voltar</button>
            <button onClick={goToCreateTrip} >Criar Viagem</button>
            <button onClick={logoutAccount} >Logout</button>
        </div>
    )
}