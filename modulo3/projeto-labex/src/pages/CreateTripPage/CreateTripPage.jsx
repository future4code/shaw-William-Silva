import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToAdminHome } from "../../routes/Coordinator";
import { Main } from "./Style";

export default function CreateTrip() {
    const navigate = useNavigate()
    // const params = useParams()

    useProtectedPage()

    return (
        <Main>
            <h1>SOU A CREATE TRIP PAGE</h1>
            <button onClick={() => goToAdminHome(navigate)} >Voltar</button>
            <button>Criar</button>
        </Main>
    )
}