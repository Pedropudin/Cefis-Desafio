"use client";

//Import react element
import { useEffect, useState } from 'react';

//Import functions from other files
import My_Button from "./elements/Button";
import TextBox from './elements/TextBox';
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
      <Title>{data.message}</Title>
      <TextBox>Escreve em mim!</TextBox>
      <My_Button>Clica em mim!</My_Button>
    </div>
  );
}

export default App;