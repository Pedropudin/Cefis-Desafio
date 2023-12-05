"use client";

import TextBox from "../elements/TextBox-user"

let cond = 0;

export default function Mypage () {
    async function signIn(formData) {
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
    switch (cond) {
        case 1:
            return(
                <div align="center">
                    <h1>Sign-in</h1>
                    <TextBox onSubmit={signIn}/>
                    <p>Sucesso!</p>
                </div>
            )
            break;
        case -1:
            return(
                <div align="center">
                    <h1>Sign-in</h1>
                    <TextBox onSubmit={signIn}/>
                    <p>Parace que alguma informação está incorreta</p>
                </div>
            )
            break;
        default:
            return(
                <div align="center">
                    <h1>Sign-in</h1>
                    <TextBox onSubmit={signIn}/>
                </div>
            )
            break;
    }

    return(
        <div align="center">
            <h1>Sign-in</h1>
            <TextBox onSubmit={signIn}/>
            {cond === true && <p>Account Created</p>}
            {cond === false && <p>There was a problem</p>}
        </div>
    )
}