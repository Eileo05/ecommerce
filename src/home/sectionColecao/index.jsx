import "./colecao.css"
import { IoShirtOutline } from "react-icons/io5";
import { PiBaseballCap, PiSneakerMoveLight, PiPants } from "react-icons/pi";
import { LuHeadphones } from "react-icons/lu";


function Colecao (){
    return(
        <section id="componet3-home">
        <h2>Coleções em destaque</h2>

        <div className="tipo-colecao">
            <div className="colecao">
                <div className="borda">
                    <IoShirtOutline className="icon-colecao" />
                </div>
                <span>Camisetas</span>
            </div>

            <div className="colecao">
                <div className="borda">
                    <PiPants className="icon-colecao" />
                </div>
                <span>Calças</span>
            </div>

            <div className="colecao">
                <div className="borda">
                    <PiBaseballCap className="icon-colecao" />

                </div>
                <span>Bonés</span>
            </div>

            <div className="colecao">
                <div className="borda">
                    <LuHeadphones className="icon-colecao" />
                </div>
                <span>Headphones</span>
            </div>

            <div className="colecao">

                <div className="borda" >
                    <PiSneakerMoveLight className="icon-colecao" />
                </div>
                <span>Tênis</span>
            </div>

        </div>

    </section>


    )
}

export default Colecao;