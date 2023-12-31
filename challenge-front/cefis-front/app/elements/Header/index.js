import Link from "next/link";
import "./Header.css"

export default function Header() {
    return(
        <div className="header">
            <div className="header-left">
                <Link href={"http://localhost:3000/"}>
                    <p>CEFIS</p>
                    <img src="https://cefis.com.br/assets-v3/images/high-quality/logo-cefis-gray-50-50.png" 
                    alt="Logo da Cefis"/>
                </Link>
            </div>
            <div className="header-right">
                <Link href={"/about"}>
                <button className="about">Saiba mais</button>
                </Link>
            </div>
        </div>
    );
}