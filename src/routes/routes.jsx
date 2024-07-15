
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/App";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        

       
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
