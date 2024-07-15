import Image from "../assets/logo (1).png";
import { FaFacebookF,FaInstagram,FaTwitter} from "react-icons/fa";
import "./footer.css"


function Footer() {


  return (
    <>
      <div id="container_footer">
           <div id="componet-footer1">
             <img src={Image} alt="logo_footer"/>

             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloremque eveniet sunt explicabo.</p>
            
              <FaFacebookF/>
              <FaInstagram/>
              <FaTwitter/>
            
         
            </div>

           <div className="componet_footer2">
             <h2>Informação</h2>
             <a>Sobre Drip Store</a>
             <a>Segurança</a>
             <a>Wishlist </a>
             <a>Blog</a>
             <a>Trabalhe conosco</a>
             <a>Meus Pedidos</a>
           </div>

           <div className="componet_footer2">
             <h2>Categorias</h2>
             <a>Camisetas</a>
             <a>Calças</a>
             <a>Bonés</a>
             <a>Headphones</a>
             <a>Tênis</a>
           </div>

           <div className="componet_footer2">
             <h2>Contato</h2>
             <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
             <p>(85) 3051-3411</p>
           </div>


      </div>

    </>
  )
}

export default Footer;