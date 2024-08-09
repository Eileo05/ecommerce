import "../PaginaLogin/PaginaLogin.css";
import HeaderMenor from "../componentes/headerMenor/index";
import { Link } from "react-router-dom";
import Image2 from "../assets/dois_tenis_nike.png";
import Footer from "../componentes/footer/index"
import Image3 from "../assets/gmailicon.jpeg"
import Image4 from "../assets/fbicon.png"






function PaginaLogin() {

    return (
        <div id="container1">

          <HeaderMenor/>

            <div className="container2">
                <form className="form">
                    <div className="text">
                        <div className="primeiro_text">
                            <h2>Acesse sua conta</h2>
                            <p>Novo cliente? Então registre-se <Link className="link" to="/Cadastro">aqui</Link></p>
                        </div>

                        <div className="segundo_text">
                            <label htmlFor="">Login *</label>
                            <br />
                            <input type="text" placeholder=" Insira seu login ou e-mail" /> <br />
                            <label htmlFor="">Senha*</label>
                            <br />
                            <input type="text" placeholder=" Insira sua senha" />
                            <br />
                        </div>

                        <div className="esqueciSenha">
                            <a href="">Esqueci minha senha</a>
                        </div>

                        <div className="quarta">
                            <button>Acessar Conta</button>
                        </div>

                        <div className="icons-login">
                            <p>Ou faça login com </p>

                            <img src={Image3} alt="" />
                            <img src={Image4} alt="" />

                        </div>
                    </div>
                </form>

                <div className="sapatos">
                    <img className="imageSapato" src={Image2} alt="sapatos" />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default PaginaLogin