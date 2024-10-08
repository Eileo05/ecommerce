
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/index";
import PaginaLogin from "../PaginaLogin/PaginaLogin";
import Pagprodutos from "../Pagprodutos/index";
import Cadastro from "../Cadastro/index";
import "../app.css"

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<PaginaLogin/>}/>
        <Route path="/Cadastro" element={<Cadastro/>}/>
        <Route path="/produtos" element={<Pagprodutos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
