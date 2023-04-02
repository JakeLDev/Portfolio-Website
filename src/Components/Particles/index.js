// import "./canvas.css"
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesCanvas = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
      <>
        <div className="particles-container">
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded}
                options={{
                    pauseOnBlur: true,
                    fpsLimit: 60,
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                      },
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 1000
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                        width: 0,
                        color: "#000000"
                        },
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                        enable: false,
                        speed: 250,
                        size_min: 0.1,
                        sync: true
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 210,
                        color: "#cdcdcd",
                        opacity: 0.5,
                        width: .8
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                        }
                    }
                    },
                    interactivity: {
                    detect_on: "window",
                    events: {
                        onhover: {
                        enable: true,
                        mode: "grab"
                        },
                        onclick: {
                        enable: true,
                        mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                        distance: 350,
                        line_linked: {
                            opacity: .4
                        }
                        },
                        bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                        },
                        repulse: {
                        distance: 300,
                        duration: 0.2
                        },
                        push: {
                        particles_nb: 3
                        },
                        remove: {
                        particles_nb: 2
                        }
                    }
                    },
                    detectRetina: false
                }
                }/>
        </div>
      </>
    );
};
export default ParticlesCanvas