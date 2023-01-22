/* import { useState } from "react"; */

export default function Impressum() {
    // states

    // creating template
    return (
        <>
            <div id="landing" className="landingWrapper">
                <div className="impressumMainContent">
                    <h1>Impressum</h1>

                    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                    <p>
                        Vedran Jaksic
                        <br />
                        Peliserkerstr. 2<br />
                        52068 Aachen
                    </p>

                    <h2>Kontakt</h2>
                    <p>
                        Telefon: &#91;Telefonnummer&#93;
                        <br />
                        E-Mail: vedran-j@web.de
                    </p>

                    <p>
                        Quelle: <a href="https://www.e-recht24.de">eRecht24</a>
                    </p>
                </div>
            </div>
        </>
    );
}
