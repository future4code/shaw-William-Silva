import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToAdminHome, goToHome } from "../../routes/Coordinator";
import { Main } from "./Style";

export default function Login() {
    const navigate = useNavigate()
    // const params = useParams()

    return (
        <Main>
            <h1>SOU A LOGIN PAGE</h1>
            <button onClick={() => goToHome(navigate)} >Voltar</button>
            <button onClick={() => goToAdminHome(navigate)} >Entrar</button>
        </Main>
    )
}