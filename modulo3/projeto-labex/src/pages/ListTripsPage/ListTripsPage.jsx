import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToApplication, goToHome } from "../../routes/Coordinator";
import { Main } from "./Style";

export default function ListTrips() {
    const navigate = useNavigate()
    // const params = useParams()

    const [tripsList, setTripsList] = useState([])

    // const getTripsList = async () => {

    //     await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips", {
    //     })
    //         .then((res) => {
    //             setTripsList(tripsList)
    //         })
    //         .catch((err) => {
    //             alert(err.response.data)
    //         })
    // }

    // useEffect(() => {
    //     getTripsList(tripsList)
    // }, [tripsList])

    // let renderList = setTripsList.map((trip) => {
    //     return <li key={trip.id}>{trip.name}</li>
    // })

    return (
        <Main>
            <h1>SOU A LIST TRIPS PAGE</h1>
            <button onClick={() => goToHome(navigate)} >Voltar</button>
            <button onClick={() => goToApplication(navigate)} >Inscrever-se</button>
            {/* {renderList} */}
        </Main>
    )
}