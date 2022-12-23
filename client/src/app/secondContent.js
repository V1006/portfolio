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
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
        </>
    );
}
