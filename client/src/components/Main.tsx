import ParticlesBackGround from "./ParticuleBackground";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Profile from "./Profile";
import Competence from "./Competence";

function Main(){

    return (
    <>
        <ParticlesBackGround/>
        <Parallax pages={3} style={{ top: '0', left: '0' }}>
            <ParallaxLayer offset={0} speed={0.2} factor={1}>
                <Profile/>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.2} factor={1}>
                <Competence/>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.2} factor={1}>
            </ParallaxLayer>
        </Parallax>
    </>
    
    
    
    
    );
}

export default Main;