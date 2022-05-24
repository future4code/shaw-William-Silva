import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../../routes/Coordinator";

export default function Post() {
    const navigate = useNavigate()

    const [comment, setComment] = useState("")

    const onChangeComment = (e) => {
        setComment(e.target.value)
    }

    return (
        <div>
            <h1>Sou a PostPage</h1>

            <button onClick={() => goToLogin(navigate)} >Logout</button>
            <input onChange={onChangeComment} value={comment} type="text" placeholder="Adicionar comentário" />
            <button>Responder</button>
        </div>
    )
}