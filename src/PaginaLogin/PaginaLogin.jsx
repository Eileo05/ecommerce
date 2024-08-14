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
    

    const navigate = useNavigate();


    function handleLogin(e){
        e.preventDefault();
        const formData= new FormData(e.target);
        const data= Object.fromEntries(formData.entries())

       console.log(data);
 
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
                            <label htmlFor="email">Login *</label>
                            <br />
                            <input type="text" name="email"  placeholder=" Insira seu login ou e-mail" /> <br />
                            <label htmlFor="senha">Senha*</label>
                            <br />
                            <input type="password" name="senha"  placeholder=" Insira sua senha" />
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