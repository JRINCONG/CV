
import { FloatingWhatsApp } from "react-floating-whatsapp"
import { Abaut } from "./pages/Abaut"
import { Contact } from "./pages/Contact"
import { Footer } from "./pages/Footer"
import { Hero } from "./pages/Hero"
import {Menu} from "./pages/Menu"
import { Proyect } from "./pages/Proyect"
import { Skill } from "./pages/Skill"
import './styles/App.css'
import foto  from "../public/img/Proyectos/foto2.jpg"

function App() {
  

  return (
 
      <div className="container">
     <Menu/>
     <Hero/>
     <Abaut/>
     <Skill/>
     <Proyect/>
     <Contact/>
     <Footer/>
     <FloatingWhatsApp 
     phoneNumber={+573126346336} 
     avatar ={foto}
     chatMessage={`Hola Gracias por Contactarme me puedes escribir a rincon303@hotmail.com`}
     notification={true}
     accountName={"Jairo Rincon Gutierrez"}
    
     darkMode={true}
     />
      </div>
     
   
  )
}

export default App
