import { useState } from "react";

export default function Project({ project }) {
    // states

    const [hover, setHover] = useState("");

    function handleMouseOver() {
        /*    const filter = projects.filter(
            (project) => project.id == event.target.id
            
        ); */
        setHover(true);
    }

    function handleMouseOut() {
        setHover(false);
    }

    // creating template
    return (
        <>
            <li className="project" key={project.id}>
                <img
                    id={project.id}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    src={hover ? project.img_hover : project.img}
                    className="projectsImage"
                ></img>
                <div className="projectDescription">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
                <div className="iconsContainer">
                    <a target="_blank" rel="noreferrer" href={project.git}>
                        <img className="git" src="/github.png"></img>
                    </a>
                </div>
            </li>
        </>
    );
}
