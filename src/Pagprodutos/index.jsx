import "./produtos.css";
import Header from "../header/App";
import Footer from "../footer/index";
import CardProd from "../cardsProd";
import CardProd2 from "../cardsprod2";

import Form from 'react-bootstrap/Form';


function Produtos() {
    return (
        <div id="produtos-container">
            <Header />
            <section>

                <div id="header-fltro-produto">
                    <div className="texto-header">
                        <p>Resultados para “Tênis” -</p>
                        <span>389 produtos</span>
                    </div>

                    <Form.Select className="select" aria-label="Default select example">
                        <option> Ordernar por: mais relevantes</option>
                        <option value="Menor preço">Menor preço</option>
                        <option value="Maior Preço">Maior Preço</option>
                        <option value="Melhor avaliado">Melhor avaliado</option>
                    </Form.Select>


                </div>

                <div id="container-filtro-produto">
                    <div className="filtro">
                        <p>Filtrar por</p>
                        <hr></hr>
                        <div className="filtros">
                            <div className="marka">
                                <p>Marka</p>
                                <div>
                                <input type="checkbox" />
                                <label for="adidas">Adiddas</label>
                                </div>
                                <div>
                                <input type="checkbox" />
                                <label for="Calenciaga">Calenciaga</label>
                                </div>
                                <div>
                                <input type="checkbox" />
                                <label for="K-Swiss">K-Swiss</label>
                                </div>
                                <div>
                                <input type="checkbox" />
                                <label for="Nike">Nike</label>
                                </div>
                                <div>
                                <input type="checkbox" />
                                <label for="Puma">Puma</label>
                                </div>     
                            </div>

                            <div className="marka">
                                <p>Categoria</p>
                                <div> <input type="checkbox" />
                                <label for="Esporte e lazer">Esporte e lazer</label></div>
                                <div>
                                <input type="checkbox" />
                                <label for="Casual">Casual</label>
                                </div>
                                <div>
                                <input type="checkbox" />
                                <label for="Utilitário">Utilitário</label>
                                </div>
                                <div>
                                <input type="checkbox" />
                                <label for="Corrida">Corrida</label>
                                </div>
                            </div>

                            <div className="marka">
                                <p>Gênero</p>
                                <div><input type="checkbox" />
                                <label for="Masculino">Masculino</label></div>
                                <div> <input type="checkbox" />
                                <label for="Feminino">Feminino</label></div>
                                <div>
                                <input type="checkbox" />
                                <label for="Unisex">Unisex</label>

                                </div>
                            </div>

                            <div className="marka">
                                <p>Estado</p>
                                <div>
                                <input type="radio" id="novo" name="fav_language" value="novo" />
                                <label for="Novo">Novo</label>
                                </div>
                                <div>
                                <input type="radio" id="usado" name="fav_language" value="usado" />
                                <label for="Usado">Usado</label>
                                </div>
    
                            </div>


                        </div>
                    </div>

                    <div className="produto">
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
                        <CardProd2 />

                        <CardProd2 />
                        <CardProd2 />
                        <CardProd2 />
                    </div>
                </div>


            </section>

            <Footer />

        </div>

    )
}

export default Produtos;