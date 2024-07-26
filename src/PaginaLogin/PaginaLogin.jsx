import "../PaginaLogin/PaginaLogin.css";
import { Link } from "react-router-dom";
import Image from "../assets/logo.png";
import Image2 from "../assets/sapatos.png";
import Footer from "../footer/index"
import Image3 from "../assets/gmailicon.jpeg"
import Image4 from "../assets/fbicon.png"




function PaginaLogin() {

    return (
        <div id="container1">

            <div className="header">
                <Link to="/" className="link">
                    <div className="img"><img src={Image} alt="logo" /></div>
                </Link>
            </div>

            <div className="container2">
                <div className="inputs">
                    <div className="text">
                        <div className="primeira">
                            <h2>Acesse sua conta</h2>
                            <p>Novo cliente? Então registre-se <a href="">aqui</a></p>
                        </div>

                        <div className="segunda">
                            <label htmlFor="">Login *</label>
                            <br />
                            <input type="text" placeholder=" Insira seu login ou e-mail" /> <br />
                            <label htmlFor="">Senha*</label>
                            <br />
                            <input type="text" placeholder=" Insira sua senha" />
                            <br />
                        </div>

                        <div className="terceira">
                            <a href="">Esqueci minha senha</a>
                        </div>

                        <div className="quarta">
                            <button>Acessar Conta</button>
                        </div>

                        <div className="icons-login">
                            <p>Ou faça login com </p>
                            <div>
                                <img src={Image3} alt="" />
                                <img src={Image4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sapatos">
                    <img className="imageSapato" src={Image2} alt="sapatos" />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default PaginaLogin