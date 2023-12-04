"use client";

//Import react element
import { useEffect, useState } from 'react';

//Import functions from other files
import My_Button from "./elements/Button";
import TextBox from './elements/TextBox-user';
import Title from './elements/Title';

//import "./Main.css";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
  fetch("http://localhost:8000/user")
  .then(res => res.json())
  .then(data => {
    setData(data);
  })
  .catch(error => {
    console.error("There was an error:",error)
  });
  }

  return (
    <div align="center">
    </div>
  );
}

const DataEntryPage = () => {
  const handleConnection = async (formData) => {
    try {
      // Send the formData to your API using a POST request
      const response = await fetch('http://localhost:8000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response from the server as needed
      const result = await response.json();
      console.log('Server response:', result);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div>
      <h1>Data Entry Page</h1>
      <TextBox onSubmit={handleConnection} />
    </div>
  );
};
export default DataEntryPage;