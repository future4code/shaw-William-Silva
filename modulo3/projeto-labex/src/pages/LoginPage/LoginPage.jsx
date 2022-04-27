import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()

    const goToPrevious = () => {
        navigate("/")
    }

    const goToAdminHome = () => {
        navigate("/paineladm")
    }

    return (
        <div>
            <h1>SOU A LOGIN PAGE</h1>
            <button onClick={goToPrevious} >Voltar</button>
            <button onClick={goToAdminHome} >Entrar</button>
        </div>
    )
}