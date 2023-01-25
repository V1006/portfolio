import { useState } from "react";

export default function HamburgerAnimation() {
    // states
    const [ariaExpanded, setAriaExpanded] = useState(false);

    function handleClick() {
        setAriaExpanded(!ariaExpanded);
    }

    // creating template
    return (
        <>
            <div className="hamburgerAnimationContainer">
                <div className="hamburgerAnimation">
                    <h1>Click me</h1>
                    <div className="arrowAnimation">
                        <span className="span1"></span>
                        <span className="span2"></span>
                    </div>

                    <button
                        className="buttonOne"
                        onClick={handleClick}
                        aria-expanded={ariaExpanded}
                    >
                        <svg
                            className="hamburgerPlayground"
                            viewBox="0 0 100 100"
                            width="250"
                        >
                            <rect
                                className="hamLine top"
                                width="80"
                                height="10"
                                x="10"
                                y="25"
                                rx="5"
                            ></rect>
                            <rect
                                className="hamLine middle"
                                width="80"
                                height="10"
                                x="10"
                                y="45"
                                rx="5"
                            ></rect>
                            <rect
                                className="hamLine bottom"
                                width="80"
                                height="10"
                                x="10"
                                y="65"
                                rx="5"
                            ></rect>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}
