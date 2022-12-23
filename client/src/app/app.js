/* stuff to add : smooth scroll on nav click, clicking anywhere to close nav, video to move depending on mouse position */

/* import { useState, useEffect } from "react"; */
import Navbar from "./nav";
import LandingContent from "./landingContent";
import SecondContent from "./secondContent";
import Projects from "./projects";
import Footer from "./footer";

/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */

export default function App() {
    // states

    // creating template
    return (
        <>
            <div className="mainContent">
                <Navbar />
                <LandingContent />
                <SecondContent />
                <Projects />
                <Footer />
            </div>
        </>
    );
}
