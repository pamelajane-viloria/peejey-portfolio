import { useState } from "react";
import Techstack from "./Techstack";

function Projects() {
    const projects = [
		{ id: 1, name: "SQL Hero", description: "Gamified web app tutorial that introduces beginner developers about SQL queries.", image: "/SQL_Hero.png", githubLink: "", youtubeLink: "", technologies: ["ReactJS", "Node.js"]},
		{ id: 2, name: "E-commerce", description: "", image: "", githubLink: "", youtubeLink: "", demo: "", technologies: ["CodeIgniter", "jQuery"] },
		{ id: 3, name: "Online Shop", description: "", image: "/online-website.jpeg", githubLink: "", youtubeLink: "", demo: "", technologies: ["Next.js", "TypeScript", "shadcn/ui"] },
		{ id: 4, name: "BlackJack", description: "", image: "", githubLink: "", youtubeLink: "", demo: "", technologies: ["Next.js", "TypeScript"] },
	];

    const projectsItems = projects.map(project =>
		<section className="relative min-h-[450px] flex flex-col overflow-hidden group">
            <h2 className="font-bold text-xl mb-3">{project.name}</h2>
            <p className="text-sm mb-2">{project.description}</p>
            <Techstack 
                technologies={project.technologies}
            />
            <div className="absolute inset-x-10 bottom-0">
              	<img src={project.image} className=""/>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-30 absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-zinc-950 flex justify-center items-end gap-5 p-10">
                <a href={project.youtubeLink} className="bg-purple-600 px-4 py-2 rounded-lg min-h-10 flex gap-2 items-center"><img src="/youtube.svg" alt="watch youtube demonstration" className="size-5" />Watch Demo</a>
                <a href={project.githubLink} className="bg-zinc-700 px-4 py-2 rounded-lg min-h-10 flex item-center">
                    <img src="/githubv2.svg" alt="github repository" className="size-5" />
                </a>
            </div>
        </section>
	);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 relative z-10">
			{projectsItems}
		</div>
    );
};

export default Projects;