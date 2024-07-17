
import "./index.css"
import Header from "../header/App";
import Footer from "../footer/index";
import Image from "../assets/Group 53660.png";
import imgCard1 from "../assets/card1.png";
import imgCard2 from "../assets/card2.png";
import imgCard3 from "../assets/card3.png";




function Home() {


    return (
        <>
            <Header />

            <div id="container-home">


                <section id="componet1-home">

                    <div id="carrosel1">

                        <div className="text-carrosel1">
                            <span>Melhores ofertas personalizadas</span>
                            <h2>Queima de stoque Nike 🔥</h2>
                            <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                            <button type="button">Ver Ofertas</button>
                        </div>

                        <div className="img-corresel1">

                            <img src={Image} id="image1" />

                        </div>
                    </div>


                </section>

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

            </div>

            {/* <Footer /> */}


        </>
    )
}

export default Home;
