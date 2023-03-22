import ParticlesBackGround from "./ParticuleBackground";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Profile from "./Profile";

function Main(){

    return (
    <>
        <ParticlesBackGround></ParticlesBackGround> 
        <Parallax pages={3} style={{ top: '0', left: '0' }}>
            <ParallaxLayer offset={0} speed={0.5} factor={1}>
                <Profile></Profile>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.5} factor={1}>
                <Profile></Profile>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5} factor={1}>
                <Profile></Profile>
            </ParallaxLayer>
        </Parallax>
    </>
    
    
    
    
    );
}

export default Main;