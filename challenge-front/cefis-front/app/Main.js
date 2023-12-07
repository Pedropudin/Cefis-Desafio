//Import react element
import Link from 'next/link';

//Import functions from other files
import My_Button from "./elements/Button";
import TextBox from './elements/TextBox-user';
import Title from './elements/Title';
import Header from './elements/Header';

import "./Main.css";



export default function homePage() {

  return (
    <div align="center">
      <Header/>
      <div className='page'>
        <div className='page-center'>
          <p>Dúvidas?</p>
          <p>Envie uma mensagem para seu professor agora!</p>
          <Link href={"/login"}>
            <button className='sign-in-button'>Envie sua Dúvida!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};