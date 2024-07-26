
import "./index.css"
import Carrosel1 from "../carrossel/index";
import Header from "../header/App";
import Footer from "../footer/index";
import CardProd from "../cardsProd";
import CardProd2 from "../cardsprod2";
import imgCard1 from "../assets/card1.png";
import imgCard2 from "../assets/card2.png";
import imgCard3 from "../assets/card3.png";
import imageOferta from "../assets/Laye1.png"
import { IoShirtOutline } from "react-icons/io5";
import { PiBaseballCap, PiSneakerMoveLight, PiPants } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";

import { LuHeadphones } from "react-icons/lu";








function Home() {
    return (
        <>
            <Header />

            <div id="container-home">

                    <Carrosel1/>
                
                <section id="componet2-home">
                    <h2>Coleções em destaque</h2>

                    <div id="cards">
                        <div className="card">
                            <div className="text-card">
                                <p>30% OFF</p>
                                <span>Novo drop
                                    Supreme</span>
                                <button type="button">Comprar</button>
                            </div>

                            <img src={imgCard1} />



                        </div>

                        <div className="card">
                            <div className="text-card">
                                <p>30% OFF</p>
                                <span>Coleção
                                    Adidas</span>
                                <button type="button">Comprar</button>
                            </div>

                            <img src={imgCard2} />


                        </div>

                        <div className="card">
                            <div className="text-card">
                                <p>30% OFF</p>
                                <span>Novo
                                    Beats Bass</span>
                                <button type="button">Comprar</button>
                            </div>

                            <img src={imgCard3} />


                        </div>
                    </div>
                </section>

                <section id="componet3-home">
                    <h2>Coleções em destaque</h2>

                    <div className="tipo-colecao">
                        <div className="colecao">
                            <div className="borda">
                                <IoShirtOutline className="icon-colecao" />
                            </div>
                            <span>Camisetas</span>
                        </div>

                        <div className="colecao">
                            <div className="borda">
                                <PiPants className="icon-colecao" />
                            </div>
                            <span>Calças</span>
                        </div>

                        <div className="colecao">
                            <div className="borda">
                                <PiBaseballCap className="icon-colecao" />

                            </div>
                            <span>Bonés</span>
                        </div>

                        <div className="colecao">
                            <div className="borda">
                                <LuHeadphones className="icon-colecao" />
                            </div>
                            <span>Headphones</span>
                        </div>

                        <div className="colecao">

                            <div className="borda" >
                                <PiSneakerMoveLight className="icon-colecao" />
                            </div>
                            <span>Tênis</span>
                        </div>

                    </div>

                </section>

                <section id="card-home">
                    <div id="text-header-card">
                        <h2>Produtos em alta</h2>
                        <a>Ver todos <IoIosArrowRoundForward />
                        </a>
                    </div>

                    <div className="card-home">
                        <CardProd desconto="30% OFF" />
                        <CardProd desconto="30% OFF" />
                        <CardProd2 />
                        <CardProd2 />
                        <CardProd2 />
                        <CardProd2 />
                        <CardProd2 />
                        <CardProd2 />
                        <CardProd2 />
                        <CardProd2 />
                        <CardProd2 />
                        <CardProd2 />
                    </div>

                </section >

                <section id="ofertas">

                    <div className="imagemOferta">
                        <img src={imageOferta} />
                    </div>

                    <div className="textoOferta">
                        <p>Oferta especial</p>
                        <h3>Air Jordan edição de
                            colecionador</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</span>
                        <button type="button">Ver Oferta</button>
                    </div>

                </section>

            </div >




            <Footer />


        </>
    )
}

export default Home;
