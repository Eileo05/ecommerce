import "./headerMenor.css";
import Image from "../../assets/logo.png";
import { Link } from "react-router-dom";




function HeaderMenor() {
    return (
        <div className="header">
        <Link to="/" className="link">
            <div className="img"><img src={Image} alt="logo" /></div>
        </Link>
    </div>
    )

}      

export default HeaderMenor;
