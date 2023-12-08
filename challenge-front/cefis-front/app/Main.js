//Import react element
import Link from 'next/link';

import "./Main.css";

export default function HomePage() {

  return (
    <div align="center" className='page'>
      <div className='page-center'>
        <p>Dúvidas?</p>
        <p>Envie uma mensagem para seu professor agora!</p>
        <Link href={"/login"}>
          <button className='sign-in-button'>Envie sua Dúvida!</button>
        </Link>
      </div>
    </div>
  );
};