import ParticlesBackGround from "./ParticuleBackground";
import Profile from "./section/Profile";
import Competence from "./section/Competence";
import Propos from "./section/Propos";
import Projects from "./section/Projects";
import Header from "./Header";
import Footer from "./Footer";

function Main(){

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

export default Main;