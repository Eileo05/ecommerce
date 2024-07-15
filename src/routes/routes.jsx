
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App"
function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
