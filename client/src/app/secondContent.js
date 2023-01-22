import { useState, useRef, useEffect } from "react";

export default function SecondContent() {
    // states
    const [visible, setVisible] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisible(true);
            }
        });
        observer.observe(textRef.current);
    }, []);

    // creating template
    return (
        <>
            <div className="secondContentContainer">
                <h1
                    ref={textRef}
                    className={
                        visible ? "textAnimation visible" : "textAnimation"
                    }
                >
                    GOOD DESIGN CREATES IDENTITY.
                </h1>
                <p
                    ref={textRef}
                    className={
                        visible
                            ? "paragraphAnimation visible"
                            : "paragraphAnimation"
                    }
                >
                    My name is Vedran , I&#39;m a junior full stack developer
                    based in germany. I have a passion for minimal design and
                    like to experiment to push the boundaries of modern design.
                </p>
            </div>
        </>
    );
}
