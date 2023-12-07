"use client";

import TextBox from "../elements/TextBox-user"
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Mypage () {

    const router = useRouter();

    async function login(userInfo) {
        fetch("http://localhost:8000/user")
        .then(res => {
            return res.json();
        })
        .then(data => {
            let userComp;
            for(let i=0;i<data.all_users.length;i++){
                userComp = data.all_users[i];
                if(userInfo.first_name === userComp.first_name && userInfo.last_name === userComp.last_name) {
                    router.push("http://localhost:3000/users?id=" + userComp.user_id);
                }
            };
        });
    }

    return(
        <div align="center">
            <h1>login</h1>
            <TextBox onSubmit={login}/>
            <p>Ainda não tem uma conta? Não perca tempo</p>
            <Link href="http://localhost:3000/signup">
                <button>Clique aqui!</button>
            </Link>
        </div>
    )
}