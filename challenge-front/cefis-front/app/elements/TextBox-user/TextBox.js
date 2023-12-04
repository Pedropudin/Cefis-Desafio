import "./TextBox.css";
import { useState } from "react";

export function TextBox({onSubmit}){

    //Create the JSON
    const [formData, setFormData] = useState({
        user_id: '',
        first_name: '',
        last_name: '',
        type: ''
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    };
    

    return(
    <div className="text-box">
    <form onSubmit={handleSubmit}>
      <label>
        Id:
        <input type="text" name="user_id" value={formData.user_id} onChange={handleChange} />
      </label>
      <br />
      <label>
        first_name:
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        last_name:
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        type:
        <input type="text" name="type" value={formData.type} onChange={handleChange} />
      </label>
      <br />
      {/* Add other input fields as needed */}
      <button type="submit">Submit</button>
    </form>
    </div>
    );
};