import Header from "../components/Header"
import Footer from "../components/Footer"

import ParticlesBackGround from "../components/ParticuleBackground";
import Profile from "../components/section/Profile";
import Propos from "src/components/section/Propos";
import Competence from "src/components/section/Competence";
import Projects from "src/components/section/Projects";

export function App(){

    return (
    <>
        <Header/>
        <ParticlesBackGround/>
        <Profile/>
        <Propos/>
        <Competence/>
        <Projects/>
        <Footer/>
    </>
    
    
    
    
    );
}

export default App;
