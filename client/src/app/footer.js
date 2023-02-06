/* import { useState } from "react"; */

export default function Footer() {
    // states

    // creating template
    return (
        <>
            <div id="footer" className="footerContentContainer">
                <article className="spiced">
                    <p></p>
                </article>
                <article className="contactData">
                    <div className="address">
                        <p>Vedran Jaksic</p>
                        <p>Peliserkerstr. 2</p>
                        <p>52068 Aachen</p>
                    </div>
                    <div className="contact">
                        <p></p>
                        <p>Email: vedranj1006@gmail.com</p>
                    </div>
                    <div className="links">
                        <ul>
                            <li>
                                <a href="/impressum">Impressum |</a>
                            </li>
                            <li>
                                <a href="/copyright">Copyright</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <div className="square"></div>
            </div>
        </>
    );
}
