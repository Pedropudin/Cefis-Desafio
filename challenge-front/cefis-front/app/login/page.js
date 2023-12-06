"use client";

import TextBox from "../elements/TextBox-user"
import Link from "next/link";

let cond = 0;

export default function Mypage () {
    async function login(formData) {
    try {
        const res = await fetch("http://localhost:8000/user",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });
        console.log("Server response:",res);
        cond = 1;
    } catch (error) {
        cond = -1;
        console.error("There was an unexpected error:",error);
    }
};
    console.log(cond);

    return(
        <div align="center">
            <h1>Sign-in</h1>
            <TextBox onSubmit={login}/>
            <p>Ainda não tem uma conta? Não perca tempo</p>
            <Link href="http://localhost:3000/signup">
                <button>Clique aqui!</button>
            </Link>
        </div>
    )
}