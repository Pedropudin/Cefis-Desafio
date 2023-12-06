//import "./Signup.css"
"use client";

import TextBox from "../elements/TextBox-user";
import Link from "next/link";

let cond = 0;

export default function SignupPage() {

    async function signup(formData) {
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
            <h1>Crie sua Conta</h1>
            <TextBox onSubmit={signup}/>
            <p>Esqueceu que já tinha uma conta?</p>
            <Link href="http://localhost:3000/login">
                <button>Clique aqui!</button>
            </Link>
        </div>
    );
}
