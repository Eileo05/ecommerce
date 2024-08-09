import "./CardAllta.css"
import CardProd from "../../componentes/cardsProd/index";
import CardProd2 from "../../componentes/cardsprod2/index";
import { IoIosArrowRoundForward } from "react-icons/io";
import {Link} from "react-router-dom";


function ProdutoEmAlta(){
    return(
        <section id="card-home">
        <div id="text-header-card">
            <h2>Produtos em alta</h2>
            <Link className="linkEmAlta" to="/produtos">Ver todos <IoIosArrowRoundForward />
            </Link>
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
    )
}

export default ProdutoEmAlta;