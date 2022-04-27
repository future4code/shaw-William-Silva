import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToApplication, goToHome } from "../../routes/Coordinator";
import { List, Main } from "./Style";

export default function ListTrips() {
    const navigate = useNavigate()
    // const params = useParams()

    const [tripsList, setTripsList] = useState([])

    const getTripsList = async () => {

        await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/william-freitas-shaw/trips", {
        })
            .then((res) => {
                setTripsList(res.data.trips)
            })
            .catch((err) => {
                alert(err.data.trips)
            })
    }

    useEffect(() => {
        getTripsList()
    }, [])

    let renderList = tripsList.map((trip) => {
        return <List key={trip.id}>
            <p>Nome: {trip.name}</p>
            <p>Descrição: {trip.description}</p>
            <p>Planeta: {trip.planet}</p>
            <p>Duração: {trip.durationInDays}</p>
            <p>Data: {trip.date}</p>
        </List>
    })

    return (
        <Main>
            <div>
                <button onClick={() => goToHome(navigate)} >Voltar</button>
                <button onClick={() => goToApplication(navigate)} >Inscrever-se</button>
            </div>
            <h1>Lista de Viagens</h1>
            {renderList}
        </Main>
    )
}