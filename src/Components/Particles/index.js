import Particles from "react-tsparticles";
// import "./canvas.css"

const ParticlesCanvas = () => {
  const particlesInit = (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (
      <>
        <div className="particles-container">
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded}
                options={{
                    pauseOnBlur: true,
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
                        polygon: {
                        nb_sides: 3
                        },
                        image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                        }
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
                        distance: 150,
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
                        distance: 150,
                        line_linked: {
                            opacity: .5
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
                        distance: 203.01930307533627,
                        duration: 0.4
                        },
                        push: {
                        particles_nb: 3
                        },
                        remove: {
                        particles_nb: 2
                        }
                    }
                    },
                    retina_detect: false
                }
                }/>
        </div>
      </>
    );
};
export default ParticlesCanvas