import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToAdminHome } from "../../routes/Coordinator";
import { Main } from "./Style";

export default function TripDetail() {
    const navigate = useNavigate()
    // const params = useParams()

    return (
        <Main>
            <h1>SOU A TRIP DETAIL PAGE</h1>
            <button onClick={() => goToAdminHome(navigate)} >Voltar</button>
        </Main>
    )
}