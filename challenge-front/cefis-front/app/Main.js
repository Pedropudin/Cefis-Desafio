"use client";

//Import react element
import { useState } from 'react';

//Import functions from other files
import My_Button from "./elements/Button";
import TextBox from './elements/TextBox';



function App() {

  return (
    <div>
      <My_Button>Clica em mim!</My_Button>
      <TextBox>Escreve em mim!</TextBox>
    </div>
  );
}

export default App;