import "./TextBox.css";
import { useState } from "react";

export function TextBox({onSubmit}){

    //Create the JSON
    const [formData, setFormData] = useState({
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
    console.log(formData);
    };
    

    return(
    <div className="text-box">
    <form onSubmit={handleSubmit}>
      <label>
        Primeiro Nome:    
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Sobrenome:
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Tipo:
        <select name="type" onChange={handleChange}>
          <option value={'-1'}>--Escolha uma opção--</option>
          <option value={'0'}>Aluno</option>
          <option value={"1"}>Professor</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
    );
};