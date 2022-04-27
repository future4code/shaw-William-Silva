import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToListTrip, sendApplication } from "../../routes/Coordinator";
import { Main } from "./Style";

export default function ApplicationForm() {
    const navigate = useNavigate()
    // const params = useParams()

    return (
        <Main>
            <h1>SOU A FORM PAGE</h1>
            <button onClick={() => goToListTrip(navigate)} >Voltar</button>
            <button onClick={() => sendApplication(navigate)} >Enviar</button>
        </Main>
    )
}