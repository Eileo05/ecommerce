import Image from "../assets/logo.png";
import { BsCartDash, BsSearch } from "react-icons/bs";
import "./index.css";


function App() {


  return (
    <>
      <div id="container">
        <div id="componet1">

          <img src={Image} alt="logo" />

          <input type="text" placeholder="Pesquisar produto... "/>
          <a>Cadastre-se</a>
          <button type="button">Entrar</button>
          
          <BsCartDash className="icon" />
         
         
        </div>

        <div id="componet2">
          <a>Home</a>
          <a>Produtos</a>
          <a>Categoria</a>
          <a>Meus Pedidos</a>


        </div>


      </div>

      
      
    </>
  )
}

export default App
