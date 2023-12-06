"use client";

//Import react element
import { useEffect, useState } from 'react';
import Link from 'next/link';

//Import functions from other files
import My_Button from "./elements/Button";
import TextBox from './elements/TextBox-user';
import Title from './elements/Title';
import Header from './elements/Header';

import "./Main.css";

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
    <div align="center">
      <Header/>
      <div className='page'>
        <div className='page-center'>
          <p>Dúvidas?</p>
          <p>Envie uma mensagem para seu professor agora!</p>
          <a href='http://localhost:3000/about'/>
          <Link href={"/login"}>
            <button className='sign-in-button'>Envie sua Dúvida!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DataEntryPage;