import "./CourseBox.css"

export default async function({courseId}) {

    const courseRes = await fetch("http://localhost:8000/course/" + courseId);
    const courseData = await courseRes.json()

    const courseInfo = courseData.course_info;

    const teacherRes = await fetch("http://localhost:8000/user/" + courseInfo.teacher_id);
    const teacherData = await teacherRes.json();

    const teacherInfo = teacherData.user;

    function sendQuestion(){
        console.log("Rodou");
    }

    return(
        <div className="courseBox">
        <h1>{courseInfo.name}</h1>
        <p className="teacher">{teacherInfo.first_name}</p>
        <label>
            Question:
            <textarea/>
        </label>
        <p className="duration">{courseInfo.duration}</p>
        <button onClick={sendQuestion}>Aqui</button>
        </div>
    );
}