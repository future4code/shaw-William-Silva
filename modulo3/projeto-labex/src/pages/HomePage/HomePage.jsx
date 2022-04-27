import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToListTrip, goToLogin } from "../../routes/Coordinator";
import { Main } from "./Style";

export default function Home() {
    const navigate = useNavigate()
    // const params = useParams()

    return (
        <Main>
            <h1>SOU A HOME PAGE</h1>
            <button onClick={() => goToListTrip(navigate)} >Ver Viagens</button>
            <button onClick={() => goToLogin(navigate)} >Área de Admin</button>
        </Main>
    )
}