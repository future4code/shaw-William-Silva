import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToListTrip } from "../../routes/Coordinator";
import { Main, Form } from "./Style";

export default function ApplicationForm() {
    const navigate = useNavigate()
    // const params = useParams()
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [reason, setReason] = useState("")
    const [occupation, setOccupation] = useState("")
    const [country, setCountry] = useState([])
    const [tripsList, setTripsList] = useState([])

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeAge = (e) => {
        setAge(e.target.value)
    }

    const changeReason = (e) => {
        setReason(e.target.value)
    }

    const changeOccupation = (e) => {
        setOccupation(e.target.value)
    }

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

    const applyToTrips = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/william-freitas-shaw/trips/:id/apply"

        const body = {
            "name": name,
            "age": age,
            "applicationText": reason,
            "profession": occupation,
            "country": country
        }

        await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                setName("")
                setAge(0)
                setReason("")
                setOccupation("")
                alert("Aplicação enviada com sucesso!")
            })
            .catch((err) => {
                console.log(err.response.data)
            })
    }

    const getCountries = async () => {
        const url = "https://restcountries.com/v3.1/all"

        await axios.get(url)
            .then((res) => {
                setCountry(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        applyToTrips()
        getTripsList()
        getCountries()
    }, [])

    let tripsOptions = tripsList.map((trip) => {
        return <option key={trip.id} >{trip.name}</option>
    })

    let countriesOptions = country.map((country) => {
        return <option key={country.name} >{country.name.common}</option>
    })

    return (
        <Main>
            <h1>Inscreva-se para um viagem</h1>
            <Form>
                <select>{tripsOptions}</select>
                <input value={name} type="text" placeholder="Nome" onChange={changeName} />
                <input value={age} type="number" placeholder="Idade" onChange={changeAge} />
                <input value={reason} type="text" placeholder="Texto de Candidatura" onChange={changeReason} />
                <input value={occupation} type="text" placeholder="Profissão" onChange={changeOccupation} />
                <select>{countriesOptions}</select>
            </Form>

            <div>
                <button onClick={() => goToListTrip(navigate)} >Voltar</button>
                <button type="submit" onClick={() => applyToTrips()} >Enviar</button>
            </div>
        </Main>
    )
}