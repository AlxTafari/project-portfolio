import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {About} from "./layout/sections/About/About.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Particle} from "./components/particle/Particle.tsx";

function App() {
    return (
        <div className="App">
            <Particle />

            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App

