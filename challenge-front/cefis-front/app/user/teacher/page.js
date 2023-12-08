"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from 'react';

import { SolutionBox } from "@/app/elements/SolutionBox";

const APIurl = "http://localhost:8000";

export default function teacherPage() {

    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        await fetch(APIurl + "/questions/" + 1)
        .then(res => res.json())
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error("There was an error:",error)
        });
    }

    async function getUserData() {
        //const userRes = await fetch(APIurl + "/user/" + id);
        //const userData = await userRes.json();
        //return userData.user;

    }

    console.log(data);

    return(
        <div>
            <SolutionBox onSubmit={getUserData} questionInfo={data}/>
        </div>
    );
}