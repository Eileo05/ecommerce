import "./ofertas.css"
import imageOferta from "../../assets/Laye1.png"



function Oferta(){
    return(
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

    )

}

export default Oferta;