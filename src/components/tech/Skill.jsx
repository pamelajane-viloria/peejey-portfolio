import { useState } from "react";

function Skill({ technology, logo }) {
    
    return (
        <li className="rounded p-3 bg-zinc-50/5 flex justify-center content-center size-16 xl:size-14 grayscale hover:grayscale-0 transition duration-150 ease-out hover:ease-in">
            <img src={logo} className="size-[35px] xl:size-[25px]" alt={technology} />
        </li>
    );
};

export default Skill;