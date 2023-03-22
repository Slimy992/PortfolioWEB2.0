import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBackGround = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles className="fixed -z-10"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fpsLimit: 120,
                 interactivity: {
                    events: {
                        resize: true,
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 125,
                        enable: true,
                        opacity: 0.8,
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
                        speed: { min: 2, max: 4 },
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.8,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 3, max: 6 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackGround;