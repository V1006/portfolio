import { useState, useEffect } from "react";
import HamburgerMenu from "./hamburgerNav";

export default function Navbar() {
    // states
    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const [logoVisible, setLogoVisible] = useState(true);

    function handleHamburgerClick() {
        setHamburgerClicked(!hamburgerClicked);
    }

    function handleScroll() {
        if (window.scrollY === 0) {
            // show the element
            setLogoVisible(true);
        } else {
            // hide the element
            setLogoVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // creating template
    return (
        <>
            <header>
                <nav className="navbar">
                    <div
                        onClick={handleHamburgerClick}
                        className="hamburger"
                    ></div>

                    <HamburgerMenu
                        hamburgerClicked={hamburgerClicked}
                        closingMenu={handleHamburgerClick}
                    />

                    <h1 className={logoVisible ? "logo" : "logo visible"}></h1>
                </nav>
            </header>
        </>
    );
}
