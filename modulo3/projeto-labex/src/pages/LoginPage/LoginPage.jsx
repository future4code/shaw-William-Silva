import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToAdminHome, goToHome } from "../../routes/Coordinator";
import { Main } from "./Style";

export default function Login() {
    const navigate = useNavigate()
    // const params = useParams()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const onLogin = async () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/futureX/william-freitas-shaw/login"
        const body = {
            email: email,
            password: password
        }

        await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                console.log(res.data.token)
                window.localStorage.setItem("token", res.data.token);
                goToAdminHome(navigate)
            })
            .catch((err) => {
                alert("Usuário não encontrado!")
            })
    }

    useEffect(() => {

    }, [])

    return (
        <Main>
            <h1>LOGIN</h1>

            <input type="email" placeholder="E-mail" value={email} onChange={changeEmail} />
            <input type="password" placeholder="Senha" value={password} onChange={changePassword} />

            <div>
                <button onClick={() => goToHome(navigate)} >Voltar</button>
                <button onClick={() => onLogin()} >Entrar</button>
            </div>
        </Main >
    )
}