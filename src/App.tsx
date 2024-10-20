import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/sections/footer/Footer";
import {Particle} from "./components/particle/Particle";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn";
import {Skills} from "./layout/sections/skills v2/Skills";

function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            {/*<Contact />*/}
            <Slogan/>
            <Footer/>
            <GoTopBtn/>
        </div>
    );
}

export default App;
