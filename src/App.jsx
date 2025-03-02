
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Skills from "./pages/Skills";





function App() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  
  return (
  
<div className="h-500 w-screen bg-white">
 
   <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Gallery/>
    <Achievements/>
    <Contact/>
  
 
  
  
  

</div>
  
  )
}

export default App
