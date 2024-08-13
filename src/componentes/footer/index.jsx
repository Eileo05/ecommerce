import Image from "../../assets/logo (1).png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {Link} from "react-router-dom";

import "./footer.css";



function Footer() {


  return (
   
      <div id="container_footer">

        <div id="footer">
          <div id="componet-footer1">
            <img src={Image} alt="logo_footer" />

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloremque eveniet sunt explicabo.</p>
            <div >
              <FaFacebookF className="icons" />
              <FaInstagram className="icons" />
              <FaTwitter className="icons" />

            </div>


          </div>

          <div className="componet_footer2">
            <h2>Informação</h2>
            <li>Sobre Drip Store</li>
            <li>Segurança</li>
            <li>Wishlist </li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li>Meus Pedidos</li>
          </div>

          <div className="componet_footer2">
            <h2>Categorias</h2>
            <li>Camisetas</li>
            <li>Calças</li>
            <li>Bonés</li>
            <li>Headphones</li>
            <li>Tênis</li>
          </div>

          <div className="componet_footer2">
            <h2>Contato</h2>
            <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
            <p>(85) 3051-3411</p>
          </div>

        </div>
        
        <hr></hr>


        <div className="final">
         
          <span>@ 2022 Digital College</span>
        </div>

      </div>

    
  )
}

export default Footer;