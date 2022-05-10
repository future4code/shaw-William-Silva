import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/Coordinator";

export default function Feed() {
    const navigate = useNavigate()

    const [text, setText] = useState("")

    const onChangeText = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <h1>Sou a FeedPage</h1>

            <button onClick={() => goToLogin(navigate)} >Logout</button>
            <input onChange={onChangeText} value={text} type="text" placeholder="Escreva seu post..." />
            <button>Postar</button>
        </div>
    )
}