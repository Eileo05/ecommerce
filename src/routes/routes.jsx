
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/index";

import Pagprodutos from "../Pagprodutos/index";


function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/produtos" element={<Pagprodutos />} />
        

       
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
