
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/index";
import PaginaLogin from "../PaginaLogin/PaginaLogin";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PaginaLogin" element={<PaginaLogin/>}/>
        

       
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
