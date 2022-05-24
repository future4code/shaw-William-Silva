import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToCreateAccount, goToFeed } from "../../routes/Coordinator";
import { Main, Logo, Inputs, Buttons } from "./StyleLoginPage";
import Labelogo from "../../logo/logo-labenu.jpg";

export default function Login() {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <Main>
                <Logo>
                    <img src={Labelogo} />
                    <h2>LabEddit</h2>
                    <p>O projeto de rede social da Labenu</p>
                </Logo>

                <Inputs>
                    <input onChange={onChangeName} value={name} type="text" placeholder="Nome" />
                    <input onChange={onChangePassword} value={password} type="password" placeholder="Senha" />
                </Inputs>

                <Buttons>
                    <button id="continue-button" onClick={() => goToFeed(navigate)} >Continuar</button>
                    <button id="create-button" onClick={() => goToCreateAccount(navigate)} >Crie uma conta!</button>
                </Buttons>
            </Main>
        </div>
    )
}