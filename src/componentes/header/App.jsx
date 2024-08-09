import Image from "../../assets/logo.png";
import { BsCartDash, BsSearch } from "react-icons/bs";
import "./index.css";

import {Link} from "react-router-dom";



function App() {


  return (
    <>
      <div id="container">
        <div id="componet1">

          <img src={Image} alt="logo" />

          <input type="text" placeholder="Pesquisar produto... "/>
          <Link to="/Login" className="link">Cadastre-se</Link>
          <button type="button">Entrar</button>
          
          <BsCartDash className="icon" />
         
         
        </div>

        <div id="componet2">
          <Link className="linkHeader" to="/">Home</Link>
          <Link className="linkHeader" to="/produtos">Produtos</Link>
          <Link className="linkHeader" to="/categoria">Categoria</Link>
          <Link className="linkHeader" to="/meusprodutos">Meus Pedidos</Link>


        </div>


      </div>

      
      
    </>
  )
}

export default App
