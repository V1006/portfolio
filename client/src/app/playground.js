/* import { useState } from "react"; */

export default function Playground() {
    // states

    // creating template
    return (
        <>
            <div className="playground">
                <div className="playLinks">
                    <h1>Playground Projects:</h1>
                    <ul>
                        <li>
                            <a href="/playground/particle">
                                Particle emitter (vanilla JS)
                            </a>
                        </li>
                        <li>
                            <a href="/playground/fluid">
                                Fluid (webGL framework)
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
