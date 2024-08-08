import imgCard1 from "../../assets/card1.png";
import imgCard2 from "../../assets/card2.png";
import imgCard3 from "../../assets/card3.png";
import "./home2.css"


function CardHome2(){
    return(
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
    )

}

export default CardHome2;