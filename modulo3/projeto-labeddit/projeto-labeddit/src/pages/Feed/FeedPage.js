import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/Coordinator";
import Labelogo from "../../logo/logo-labenu.jpg"
import { Main, Header, Body } from "./StyleFeedPage";

export default function Feed() {
    const navigate = useNavigate()

    const [text, setText] = useState("")

    const onChangeText = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <Main>
                <Header>
                    <img src={Labelogo} />
                    <button onClick={() => goToLogin(navigate)} >Logout</button>
                </Header>

                <Body>
                    <input onChange={onChangeText} value={text} type="text" placeholder="Escreva seu post..." />
                    <button>Postar</button>
                </Body>
            </Main>
        </div>
    )
}