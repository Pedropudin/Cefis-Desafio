import { useState } from "react";

export function QuestionBox({onSubmit,course}) {

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
        onSubmit(formData,course);
    };

    return(
        <div className="question-box">
        <form onSubmit={handleSubmit}>
        <label>
            Questão:
            <textarea name="text" value={formData.text} onChange={handleChange}/>
        </label>
        <button type="submit">Clica</button>
        </form>
        </div>
    );
}