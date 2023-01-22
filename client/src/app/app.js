/* stuff to add : smooth scroll on nav click, clicking anywhere to close nav, video to move depending on mouse position */

/* import { useState, useEffect } from "react"; */
import Navbar from "./nav";
import LandingContent from "./landingContent";
import SecondContent from "./secondContent";
import Projects from "./projects";
import Footer from "./footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Impressum from "./impressum";
import Playground from "./playground";
import Particle from "./particle";
import Fluid from "./fluid";

/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */

export default function App() {
    // states

    function renderSite() {
        return (
            <>
                <Navbar />
                <LandingContent />
                <SecondContent />
                <Projects />
                <Footer />
            </>
        );
    }
    function renderImpressum() {
        return (
            <>
                <Navbar />
                <Impressum />
                <Footer />
            </>
        );
    }

    /*  function renderPlayground() {
        return (
            <>
                
            </>
        );
    }
 */
    // creating template
    return (
        <>
            <div className="mainContent">
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/impressum"
                            element={renderImpressum()}
                        ></Route>
                        <Route exact path="/" element={renderSite()}></Route>
                        <Route
                            exact
                            path="/playground"
                            element={<Playground />}
                        ></Route>
                        <Route
                            exact
                            path="/playground/particle"
                            element={<Particle />}
                        ></Route>
                        <Route
                            exact
                            path="/playground/fluid"
                            element={<Fluid />}
                        ></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}
