import { useState } from "react";

export function QuestionBox({onSubmit}) {

    //Create JSON
    const [formData, setFormData] = useState({
        user_id: 0,
        course_id: 0,
        text: '',
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

    
}