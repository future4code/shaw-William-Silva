import React from "react";
import { useNavigate } from "react-router-dom";

export default function ApplicationForm() {
    const navigate = useNavigate()

    const goToPrevious = () => {
        navigate("/")
    }

    const sendApplication = () => {
        navigate("/listagem")
    }

    return (
        <div>
            <h1>SOU A FORM PAGE</h1>
            <button onClick={goToPrevious} >Voltar</button>
            <button onClick={sendApplication} >Enviar</button>
        </div>
    )
}