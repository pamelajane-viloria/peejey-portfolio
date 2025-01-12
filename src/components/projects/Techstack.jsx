import { useState } from "react";

function Techstack({ technologies }) {
    
    const techstack = technologies.map((technology) =>
        <li className="rounded-full bg-purple-500 px-2 py-px text-sm">
          {technology}
        </li>
    );

    return (
        <ul className="flex gap-2 mb-5">{techstack}</ul>
    );
};

export default Techstack;