
import "./index.css"
// import Carrosel1 from "../carrossel/index";
import Header from "../componentes/header/App";
import Footer from "../componentes/footer/index";
import ProdutoEmAlta from "./cardEmAlta";
import CardHome2 from "./sectionCardDestaque";
import Colecao from "./sectionColecao";
import Oferta from "./ofertas";
import ControlledCarousel from "../carrossel/carroselbootstrap/caroselBootstrap";



function Home() {
    return (
        <div id="container-home">
            <Header />
            <ControlledCarousel />
            <CardHome2 />
            <Colecao />
            <ProdutoEmAlta />
            <Oferta />
            <Footer />
        </div>
    )
}

export default Home;
