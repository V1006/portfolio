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
            git: "https://github.com/V1006/socialnetwork",
        },
        {
            id: 2,
            img: "/candyploppic.png",
            img_hover: "/candyPlop.gif",
            name: "CandyPlop",
            description: "Connect 4 fully made with vanilla Javascript.",
            git: "https://github.com/V1006/connect-four/tree/master/week3/day5/Connect%20Four",
            link: "https://fboo0j.csb.app/",
        },
        {
            id: 3,
            img: "/petitionpic.png",
            img_hover: "/petition(1).gif",
            name: "Petition",
            description:
                "This petition project uses cookies, encrypted user login as well as a database to handle different users.",
            git: "https://github.com/V1006/petition",
        },
    ]);
    console.log(setProjects);

    // creating template
    return (
        <>
            <section className="projectsWrapper">
                <div id="projects" className="projectsContentContainer">
                    <h1>Projects</h1>
                    <p>
                        {" "}
                        Here are recent projects I have been working on.
                        <br />
                        You can also check out my playground where I am playing
                        around with animations.
                    </p>
                    <a target="_blank" href="/playground">
                        Playground
                    </a>
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
