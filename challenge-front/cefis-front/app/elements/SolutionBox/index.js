import { useState,useEffect } from "react";

const APIurl = "http://localhost:8000";

export function SolutionBox({onSubmit}) {

    //Create JSON
    const [formData, setFormData] = useState({
        user_id: 0,
        course_id: 0,
        text: '',
        solution: '',
        status: 0
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
    };

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(formData);
    };

    return(
        <div className="question-box">
        <div>
        <p>{formData.text}</p>
        <form onSubmit={handleSubmit}>
        <label>
            Solução:
            <textarea name="text" value={formData.solution} onChange={handleChange}/>
        </label>
        <button type="submit">Clica</button>
        </form>
        </div>
        </div>
    );
}