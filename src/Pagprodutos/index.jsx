import "./produtos.css";
import Header from "../componentes/header/App";
import Footer from "../componentes/footer/index";
import CardProd from "../componentes/cardsProd/index";
import CardProd2 from "../componentes/cardsprod2/index";

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
                            <div className="categorias-produto">
                                <p>Marka</p>
                                <div className="check">
                                    <input type="checkbox" />
                                
                                    <label for="adidas">Adiddas</label>
                                </div>
                                <div className="check">
                                    <input type="checkbox" />
                                   
                                    <label for="Calenciaga">Calenciaga</label>
                                </div>
                                <div className="check">
                                    <input type="checkbox" />
                                  
                                    <label for="K-Swiss">K-Swiss</label>
                                </div>
                                <div className="check">
                                    <input type="checkbox" />
                                   
                                    <label for="Nike">Nike</label>
                                </div>
                                <div className="check">
                                    <input type="checkbox" />
                                    
                                    <label for="Puma">Puma</label>
                                </div>
                            </div>

                            <div className="categorias-produto">
                                <p>Categoria</p>
                                <div className="check">
                                    <input type="checkbox" />
                                    
                                    <label for="Esporte e lazer">Esporte e lazer</label></div>
                                <div className="check">
                                    <input type="checkbox" />
                                   
                                    <label for="Casual">Casual</label>
                                </div>
                                <div className="check">
                                    <input type="checkbox" />
                                   
                                    <label for="Utilitário">Utilitário</label>
                                </div>
                                <div className="check">
                                    <input type="checkbox" />
                                  
                                    <label for="Corrida">Corrida</label>
                                </div>
                            </div>

                            <div className="categorias-produto">
                                <p>Gênero</p>
                                <div className="check">
                                    <input type="checkbox" />
                                    
                                    <label for="Masculino">Masculino</label></div>
                                <div className="check"> 
                                    <input type="checkbox" />
                                    
                                    <label for="Feminino">Feminino</label></div>
                                <div className="check">
                                    <input type="checkbox" />
                    
                                    <label for="Unisex">Unisex</label>

                                </div>
                            </div>

                            <div className="categorias-produto">
                                <p>Estado</p>
                                <div className="check">
                                    <input type="radio" id="novo" name="fav_language" value="novo" />
                                    <label for="Novo">Novo</label>
                                </div>
                                <div className="check">
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