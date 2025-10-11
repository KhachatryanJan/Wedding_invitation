import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./componets/header/Header";
import Footer from "./componets/footer/Footer";


    
function App() {
  return (
    <>
    <Header/>
    
    <Routes>
        <Route path="/Wedding_invitation" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer/> 
  
    </>  

  );
}

export default App;
