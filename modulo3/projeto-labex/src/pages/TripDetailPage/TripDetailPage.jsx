import React from "react";
import { useNavigate } from "react-router-dom";

export default function TripDetail() {
    const navigate = useNavigate()

    const goToPrevious = () => {
        navigate("/paineladm")
    }
    
    return(
        <div>
            <h1>SOU A TRIP DETAIL PAGE</h1>
            <button onClick={goToPrevious} >Voltar</button>
        </div>
    )
}