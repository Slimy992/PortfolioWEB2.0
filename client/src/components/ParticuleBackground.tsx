import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBackGround = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    
    return (
        <Particles 
            className="fixed -z-10"
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "#18181b",
                    },
                },
                fpsLimit: 60,
                 interactivity: {
                    events: {
                        resize: true,
                    },
                },
                particles: {
                    color: {
                        value: "#dc2626",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 1,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 65,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 2, max: 8 },
                    },
                },
            }}
        />
    );
};

export default ParticlesBackGround;