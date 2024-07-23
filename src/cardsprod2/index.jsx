import image from "../assets/layer.png";
import "./card.css"


function CardProd2({titulo,descricao,valor}) {
       
    return (
        <div id="card-container">
            <div id="cards-produtos">
                <div id="card-prod-container">
                    <div className="card-prod">
                        <div className="card-part1">
                        
                            <img src={image} alt="tenis" />
                        </div>
                        <p>{titulo}Tênis</p>
                        <h3> {descricao}K-Swiss V8 - Masculino</h3>
                        <span id="preco">{valor}$100</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CardProd2;