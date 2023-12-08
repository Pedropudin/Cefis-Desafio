"use client";

import TextBox from "../elements/TextBox-user"
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Mypage () {

    const router = useRouter();

    async function login(userInfo) {
        console.log("Trying to log-in");

        fetch("http://localhost:8000/user")
        .then(res => {
            return res.json();
        })
        .then(data => {
            let userComp;
            for(let i=0;i<data.all_users.length;i++){
                userComp = data.all_users[i];
                if(userInfo.first_name === userComp.first_name && userInfo.last_name === userComp.last_name) {
                    console.log(userInfo.type);
                    if(userInfo.type === '0'){
                        router.push("http://localhost:3000/user/student?id=" + userComp.user_id);
                    } else if(userInfo.type === '1'){
                        router.push("http://localhost:3000/user/teacher?id=" + userComp.user_id);
                    } else{
                        console.log("escolhe burro");
                    }
                }
            };
        });
    }

    return(
        <div align="center">
            <h1>Entre na sua conta</h1>
            <TextBox onSubmit={login}/>
            <p>Ainda não tem uma conta? Não perca tempo</p>
            <Link href="http://localhost:3000/signup">
                <button>Clique aqui!</button>
            </Link>
        </div>
    )
}