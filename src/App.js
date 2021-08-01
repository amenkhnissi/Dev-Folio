import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import About from './Components/About';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Particles from 'react-particles-js';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  let particles = {
    line_linked: {
      color: "#4070F4",

      shadow: {
        enable: true,
        color: "#4070F4",
        blur: 6
      }
    },
     number:{
       value:25,
       density:{
         enable:true,
         value_area : 900
       }
     },
     Shape :{
       type: 'star',
       stroke:{
         width: 200,
       }
     },
     
   }

  return (
    <Router>
    
    <Navbar />
   
    <Particles params={{ particles}}/>
   <Home />
   
  
   <About />
   <Skills />
   <Work />
   <Particles params={{ particles}}/>
   <Contact />
   <Footer />

   </Router>

  );
}

export default App;
