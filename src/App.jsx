import { Abaut } from "./pages/Abaut"
import { Contact } from "./pages/Contact"
import { Footer } from "./pages/footer"
import { Hero } from "./pages/Hero"
import {Menu} from "./pages/Menu"
import { Proyect } from "./pages/Proyect"
import { Skill } from "./pages/Skill"
import './styles/App.css'

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
      </div>
      
   
  )
}

export default App
