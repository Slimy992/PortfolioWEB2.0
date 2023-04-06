import { BrowserRouter } from "react-router-dom";

import Header from "../components/Header"
import Footer from "../components/Footer"

import ParticlesBackGround from "../components/ParticuleBackground";
import Profile from "../components/section/Profile";
import Propos from "../components/section/Propos";
import Competence from "../components/section/Competence";
import Projects from "../components/section/Projects";
import Contact from "src/components/section/Contact";

export function App(){

    return (
    <BrowserRouter>
        <Header/>
        <ParticlesBackGround/>
        <Profile/>
        <Propos/>
        <Competence/>
        <Projects/>
        <Contact/>
        <Footer/>
    </BrowserRouter>
    );
}

export default App;
