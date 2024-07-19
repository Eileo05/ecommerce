import { IoIosArrowRoundForward } from "react-icons/io";
import image from "../assets/layer.png";
import "./cards.css"


function CardProd() {
    return (
        <div id="card-container">
            <div id="text-header-card">
                <h2>Produtos em alta</h2>
                <a>Ver todos <IoIosArrowRoundForward />
                </a>
            </div>

            <div id="card-prod-container">
                <div className="card-prod">
                    <div className="card-part1">
                        <span>30% OFF</span>
                        <img src={image} />
                    </div>
                    <p>Tênis</p>
                    <h3>K-Swiss V8 - Masculino</h3>
                    <span>$100</span>
                </div>


                
            </div>

        </div>
    )
}

export default CardProd;