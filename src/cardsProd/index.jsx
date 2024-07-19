import image from "../assets/layer.png";
import "./cards.css"


function CardProd() {
    return (
        <div id="card-container">
            <div id="cards-produtos">
                <div id="card-prod-container">
                    <div className="card-prod">
                        <div className="card-part1">
                            <span>30% OFF</span>
                            <img src={image} />
                        </div>
                        <p>Tênis</p>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <span id="preco">$100</span>
                    </div>
                </div>

                <div id="card-prod-container">
                    <div className="card-prod">
                        <div className="card-part1">
            
                            <img src={image} />
                        </div>
                        <p>Tênis</p>
                        <h3>K-Swiss V8 - Masculino</h3>
                        <span id="preco">$100</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardProd;