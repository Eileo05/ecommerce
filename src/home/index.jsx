
import "./index.css"
import Carrosel1 from "../carrossel/index";
import Header from "../header/App";
import Footer from "../footer/index";
import ProdutoEmAlta from "./cardEmAlta";
import CardHome2 from "./sectionCardDestaque";
import Colecao from "./sectionColecao";
import Oferta from "./ofertas";


function Home() {
    return (
        <div id="container-home">
            <Header />
            <Carrosel1 />
            <CardHome2 />
            <Colecao />
            <ProdutoEmAlta />
            <Oferta />
            <Footer />
        </div>
    )
}

export default Home;
