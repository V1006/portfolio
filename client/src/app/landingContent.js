/* import { useRef, useEffect } from "react"; */
import { motion /* useMotionValue, useTransform */ } from "framer-motion";

export default function LandingContent() {
    // states
    /* const x = useMotionValue(10);
    const y = useMotionValue(10);

    const rotateX = useTransform(y, [0, 50], [20, -20]);
    const rotateY = useTransform(x, [0, 50], [-20, 20]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    } */

    // creating template
    return (
        <>
            <div id="landing" className="landingWrapper">
                <div className="landingMainContent">
                    <section className="landing-middle-section">
                        <motion.video
                            /* onMouseMove={handleMouse} */
                            drag
                            dragConstraints={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                            style={{
                                x: 0 /* rotateX: rotateX, rotateY: rotateY  */,
                            }}
                            src="/X2Download.app-blob12.mp4"
                            autoPlay
                            muted
                            loop
                        ></motion.video>
                        <img className="logoMain" src="./logo.png"></img>
                        <p className="landingTextBox">
                            Web design can be so much more if we push the
                            boundaries through experiments. I believe in playful
                            design that engages the user in a friendly way. My
                            vision is that design evolves into more diversity
                            and user interaction.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
}
