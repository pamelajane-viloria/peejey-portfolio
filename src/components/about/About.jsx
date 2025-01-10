import { useState } from 'react';

function About() {

	return (
        <section className="xl:col-span-2 flex flex-col justify-center">
            <h1 className="text-xl mb-3">Hello, I'm Pamela.</h1>
            <h2 className="text-4xl mb-2">A developer passionate about creating intuitive and user-friendly experiences.</h2>
            <p className="text-sm mb-7">Dedicated to transforming complex ideas into seamless, functional, and visually appealing solutions that users love.</p>
            <ul className="flex gap-3">
                <li>
                    <div className="">Let's chat</div>
                </li>
                <li>
                    <div className="bg-transparent border">
                        View resume
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default About;