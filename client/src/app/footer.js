/* import { useState } from "react"; */

export default function Footer() {
    // states

    // creating template
    return (
        <>
            <div id="footer" className="footerContentContainer">
                <article className="spiced">
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam
                    </p>
                </article>
                <article className="contactData">
                    <div className="address">
                        <p>Vedran</p>
                        <p>Street name</p>
                        <p>52068 Aachen</p>
                    </div>
                    <div className="contact">
                        <p>Mobile 1234567</p>
                        <p>Email placeholder@test.com</p>
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
