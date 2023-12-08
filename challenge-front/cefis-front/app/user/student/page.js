"use client"

//Import react element
import { useSearchParams } from 'next/navigation';

import { QuestionBox } from '@/app/elements/QuestionBox';

//import "./User.css";

const APIurl = "http://localhost:8000";

export default function userPage() {

    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    async function getUserData() {
      const userRes = await fetch(APIurl + "/user/" + id);
      const userData = await userRes.json();
      return userData.user;
    }

    async function sendQuestion(formData,course) {
        const userData = await getUserData();
        formData.user_id = userData.user_id;
        formData.course_id = course;
        console.log(formData);

        try{
            const res = await fetch(APIurl + "/questions",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            console.log(data);
        } catch(error) {
            console.error("There was an unexpected error:", error);
        }
    }

    return (
      <div align="center">
        <h1>Olá</h1>
        <p>Aqui estão os cursos disponíveis:</p>
        <QuestionBox onSubmit={sendQuestion} course={2}/>
      </div>
    );
}