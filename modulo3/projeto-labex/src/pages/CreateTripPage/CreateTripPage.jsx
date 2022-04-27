import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreateTrip() {
    const navigate = useNavigate()

    const goToPrevious = () => {
        navigate("/paineladm")
    }

    return (
        <div>
            <h1>SOU A CREATE TRIP PAGE</h1>
            <button onClick={goToPrevious} >Voltar</button>
            <button>Criar</button>
        </div>
    )
}