import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useProtectedPage() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if (token === null) {
            navigate("/login")
        }
    }, [navigate])
}