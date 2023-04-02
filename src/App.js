import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import './index.css'

function App() {
  return (
    <div className="container py-3">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
