import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListTrips() {
    const navigate = useNavigate()

    const goToPrevious = () => {
        navigate("/")
    }

    const goToCreateTrip = () => {
        navigate("/formulario")
    }

    return (
        <div>
            <h1>SOU A LIST TRIPS PAGE</h1>
            <button onClick={goToPrevious} >Voltar</button>
            <button onClick={goToCreateTrip} >Inscrever-se</button>
        </div>
    )
}