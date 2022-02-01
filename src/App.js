import "./App.css";
import About from "./components/About";
import Background from "./components/Background";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "./components/Favorite";

function App() {

  return (
           <BrowserRouter>
        <Routes>
        <Route index element={<Background  />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        </Routes>
        </BrowserRouter>
      
   
  );
}

export default App;
