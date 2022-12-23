import { useState } from "react";
import Project from "./project";

export default function Projects() {
    // states
    const [projects, setProjects] = useState([
        {
            id: 1,
            img: "/podchat_static.png",
            img_hover: "/podchat.gif",
            name: "Podchat",
            description:
                "A Social Network made with React for podcast enthusiasts to connect and share their favorite podcasts.",
            git: "https://github.com/spicedacademy/liebstockel-socialnetwork",
        },
        {
            id: 2,
            img: "/candypop_static.png",
            img_hover: "/candy-pop.gif",
            name: "CandyPop",
            description: "Connect 4 fully made with vanilla Javascript.",
            git: "https://github.com/spicedacademy/liebstockel-socialnetwork",
        },
        {
            id: 3,
            img: "/petition_static.png",
            img_hover: "/petition.gif",
            name: "Petition",
            description:
                "This petition project uses cookies, encrypted user login as well as a database to handle different users.",
            git: "https://github.com/spicedacademy/liebstockel-socialnetwork",
        },
    ]);
    console.log(setProjects);

    // creating template
    return (
        <>
            <section className="projectsWrapper">
                <div id="projects" className="projectsContentContainer">
                    <h1>Projects</h1>
                    <div className="projects">
                        <ul>
                            {projects.map((project) => (
                                /* if each element needs their own specific eventlistener create components and pass the data down*/
                                <Project key={project.id} project={project} />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}