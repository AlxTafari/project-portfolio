import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {About} from "./layout/sections/About/About.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footter} from "./layout/footer/Footter.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footter/>
        </div>
    )
}

export default App

