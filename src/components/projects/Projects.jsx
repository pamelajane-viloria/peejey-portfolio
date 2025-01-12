import { useState } from "react";

function Projects() {
    const projects = [
		{ id: 1, name: "SQL Hero", description: "", image: "/SQL_Hero.png", githubLink: "", demo: "", technologies: ["react", "node.js"]},
		{ id: 2, name: "E-commerce", description: "", image: "", githubLink: "", demo: "", technologies: ["codeigniter", "jquery"] },
		{ id: 3, name: "Online Shop", description: "", image: "", githubLink: "", demo: "", technologies: ["Nextjs", "typescript"] },
		{ id: 4, name: "BlackJack", description: "", image: "", githubLink: "", demo: "", technologies: ["Nextjs", "typescript"] },
	];

    const projectsItems = projects.map(project =>
		<section className="relative h-[450px]">
            <h2 className="">{project.name}</h2>
            <p>{project.description}</p>
            <img src={project.image} className="absolute bottom-0 w-fit"/>
        </section>
	);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 relative z-10">
			{projectsItems}
		</div>
    );
};

export default Projects;