"use client";

//import "./Signup.css"

import { useRouter } from "next/navigation";

import TextBox from "../elements/TextBox-user";
import Link from "next/link";

let cond = 0;
const APIurl = "http://localhost:8000"
const PageUrl = "http://localhost:3000"

export default function SignupPage() {

    const router = useRouter();

    async function signup(formData) {
        try {
            const res = await fetch(APIurl + "/user",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
            if(res.status === 201){
                router.push(PageUrl + "/login");
            }
            cond = 1;
        } catch (error) {
            cond = -1;
            console.error("There was an unexpected error:",error);
        }
    };

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
