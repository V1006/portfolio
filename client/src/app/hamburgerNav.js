import { useRef } from "react";
/* import useClickOutside from "use-click-outside"; */

export default function HamburgerMenu({ closingMenu, hamburgerClicked }) {
    // states
    const navMenu = useRef();

    /*   useEffect(() => {
        useClickOutside(navMenu, closingMenu);
    }, []); */

    /*  const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    }; */

    // creating template
    return (
        <>
            <div
                ref={navMenu}
                style={
                    hamburgerClicked
                        ? { visibility: "visible" }
                        : { visibility: "hidden" }
                }
                className={`hamburgerOpenContainer ${
                    hamburgerClicked ? "visible" : ""
                }`}
            >
                <div className="openTopBar">
                    <img onClick={closingMenu} src="./xhamburger.png"></img>
                </div>
                <div className="navLinks">
                    <ul>
                        <li>
                            <a href="#landing">home</a>
                        </li>
                        <li>
                            <a href="#projects">projects</a>
                        </li>
                        <li>
                            <a href="#footer">contact</a>
                        </li>
                    </ul>
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <a href="#">Impressum |</a>
                        </li>
                        <li>
                            <a href="#">AGB |</a>
                        </li>
                        <li>
                            <a href="#">Copyright</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
