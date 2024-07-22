import "../PaginaLogin/PaginaLogin.css";
import Image from "../assets/logo.png";
import Image2 from "../assets/sapatos.png";
import Footer from "../footer/index"




function PaginaLogin() {

    return (
        <div id="container1">

            <div className="header">
                <div className="img"><img src={Image} alt="logo" /></div>
            </div>

            <div className="container2">
                <div className="inputs">
                    <h1>Acesse sua conta</h1>
                    <p>Novo cliente? Então registre-se <a href="">aqui</a></p>
                    <label htmlFor="">Login *</label>
                    <br />
                    <input type="text" placeholder="Insira seu login ou e-mail" /> <br />
                    <label htmlFor="">Senha*</label> <br />
                    <input type="text" placeholder="insira sua senha" />
                    <br />
                    <a href="">Esqueci minha senha</a>
                </div>

                <div className="sapatos">
                    <img className="imageSapato" src={Image2} alt="sapatos" />
                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default PaginaLogin