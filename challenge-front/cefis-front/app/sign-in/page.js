"use client";

import TextBox from "../elements/TextBox-user"

let cond;

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
        cond = true;
    } catch (error) {
        cond = false;
        console.error("There was an unexpected error:",error);
    }
};

    return(
        <div align="center">
            <h1>Sign-in</h1>
            <TextBox onSubmit={signIn}/>
            {cond ? (
                <p>É verdade</p>
            ):(
                <p>É mentira</p>
            )}
        </div>
    )
}