import "../PaginaLogin/PaginaLogin.css";
import HeaderMenor from "../componentes/headerMenor/index";
import { Link,useNavigate } from "react-router-dom";
import Image2 from "../assets/dois_tenis_nike.png";
import Footer from "../componentes/footer/index"
import Image3 from "../assets/gmailicon.jpeg"
import Image4 from "../assets/fbicon.png"
import ScrollToTop from "../componentes/scrollTop";
import React, { useState } from 'react';








function PaginaLogin() {
    

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();


    function handleLogin(e){
        e.preventDefault();

       console.log(email);
       console.log(senha);
       navigate("/", { replace: true })
       
      }
      

    

    return (
        <div id="container1">
            <ScrollToTop/>
            <HeaderMenor />

            <div className="container2">
                <form className="form" onSubmit={handleLogin} >
                    <div className="text">
                        <div className="primeiro_text">
                            <h2>Acesse sua conta</h2>
                            <p>Novo cliente? Então registre-se <Link className="link" to="/Cadastro">aqui</Link></p>
                        </div>

                        <div className="segundo_text">
                            <label htmlFor="">Login *</label>
                            <br />
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" Insira seu login ou e-mail" /> <br />
                            <label htmlFor="">Senha*</label>
                            <br />
                            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder=" Insira sua senha" />
                            <br />
                        </div>

                        <div className="esqueciSenha">
                            <a href="">Esqueci minha senha</a>
                        </div>

                        <div className="quarta">
                            <button >Acessar Conta</button>
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