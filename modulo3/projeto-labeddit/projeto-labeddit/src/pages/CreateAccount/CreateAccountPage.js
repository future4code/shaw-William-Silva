import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../../routes/Coordinator";

export default function CreateAccount() {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <h1>Sou a CreateAccountPage</h1>

            <button onClick={() => goToLogin(navigate)} >Entrar</button>
            <input onChange={onChangeName} value={name} type="text" placeholder="Nome de usuário" />
            <input onChange={onChangeEmail} value={email} type="email" placeholder="E-mail" />
            <input onChange={onChangePassword} value={password} type="password" placeholder="Senha" />
            <input type="checkbox" />
            <button onClick={() => goToFeed(navigate)} >Cadastrar</button>
        </div >
    )
}