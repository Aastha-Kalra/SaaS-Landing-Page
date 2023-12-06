import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Carousel from "./components/Home";
import ScrollToTopButton from "./components/ScrollToTop";
import Feature from "./components/Feature";
import Clients from "./components/Clients";
import Blogs from "./components/Blogs";
function App() {
  return <>
  
 
 <BrowserRouter>
 <Navbar/>
 <Carousel/>
 <About/>
 <Feature/>
 <Clients/>
 <Team/>
 <Blogs/>
 <Footer/>
 <ScrollToTopButton/>
 </BrowserRouter>


  </>;
}

export default App;
