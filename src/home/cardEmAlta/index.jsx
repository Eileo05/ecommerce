import "./CardAllta.css"
import CardProd from "../../cardsProd";
import CardProd2 from "../../cardsprod2";
import { IoIosArrowRoundForward } from "react-icons/io";


function ProdutoEmAlta(){
    return(
        <section id="card-home">
        <div id="text-header-card">
            <h2>Produtos em alta</h2>
            <a>Ver todos <IoIosArrowRoundForward />
            </a>
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