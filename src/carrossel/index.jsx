
import Image from "../assets/Group 53660.png";


import "./carrosel.css"

function Carrosel() {
   
    return (

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

    )
}

export default Carrosel;


