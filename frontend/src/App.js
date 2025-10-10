import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./componets/header/Header";
import Footer from "./componets/footer/Footer";
import Main from "./componets/main/Main";
/*<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>*/
    
function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer/> 
    {/*<Home />*/}
    {/*<About />*/}
    {/*<Contact />*/}
    </>  

  );
}

export default App;
