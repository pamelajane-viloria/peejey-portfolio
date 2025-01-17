import { useState } from 'react';
import Skill from './Skill';

function Techskills() {

    const technicalSkills = [
		{ id: 1, technology: "PHP", logo: "/php.svg" },
		{ id: 2, technology: "Javascript", logo: "/javascript.svg" },
		{ id: 3, technology: "HTML", logo: "/html.svg" },
		{ id: 4, technology: "CSS", logo: "/css.svg" },
		{ id: 5, technology: "Bootstrap", logo: "/bootstrap.svg" },
		{ id: 6, technology: "TailwindCSS", logo: "/tailwind.svg" },
		{ id: 7, technology: "Sass", logo: "/sass.svg" },
		{ id: 8, technology: "jQuery", logo: "/jquery.svg" },
		{ id: 9, technology: "CodeIgniter", logo: "/codeigniter.svg" },
		{ id: 10, technology: "Node.js", logo: "/node.svg" },
		{ id: 11, technology: "Express.js", logo: "/express.svg" },
		{ id: 12, technology: "Socket.IO", logo: "/socketio.svg" },
		{ id: 13, technology: "React", logo: "/react.svg" },
		{ id: 14, technology: "Typescript", logo: "/typescript.svg" },
		{ id: 15, technology: "Next.js", logo: "/next.svg" },
		{ id: 16, technology: "PostgreSQL", logo: "/postgresql.svg" },
		{ id: 17, technology: "Wordpress", logo: "/wordpress.svg" },
	];

	const skillItems = technicalSkills.map(skill =>
		<Skill
			key={skill.id}
			logo={skill.logo}
			technology={skill.technology}
		/>
	);

	return (
        <section>
            <h2 className="text-sm mb-4">I've been coding since high school and I'm still going strong. I love learning new things and pushing the boundaries of technology.</h2>
			<ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-3 md:grid-cols-9 md:gap-2 lg:grid-cols-12 xl:grid-cols-5">
				{skillItems}
			</ul>
        </section>
    );
};

export default Techskills;