import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToLogin, goToCreateTrip, logoutAccount } from "../../routes/Coordinator"
import { Main } from "./Style";

export default function AdminHome() {
    const navigate = useNavigate()
    // const params = useParams()

    return (
        <Main>
            <h1>SOU A ADMIN PAGE</h1>
            <button onClick={() => goToLogin(navigate)} >Voltar</button>
            <button onClick={() => goToCreateTrip(navigate)} >Criar Viagem</button>
            <button onClick={() => logoutAccount(navigate)} >Logout</button>
        </Main>
    )
}