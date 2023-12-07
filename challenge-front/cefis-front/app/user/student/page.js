//Import react element
import { useSearchParams } from 'next/navigation';

import CourseBox from '@/app/elements/CourseBox';

//import "./User.css";

const APIurl = "http://localhost:8000";

export default async function userPage() {

    //const searchParams = useSearchParams();
    //const id = searchParams.get('id');

    const userRes = await fetch(APIurl + "/user/" + 1);
    const userData = await userRes.json();

  return (
    <div align="center">
      <h1>Olá</h1>
      <p>Aqui estão os cursos disponíveis:</p>
      <CourseBox courseId={1}/>
    </div>
  );
}