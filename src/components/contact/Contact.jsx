import { useState } from 'react';

function Contact() {

	return (
        <section className="xl:col-span-2 flex flex-col justify-center">
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me via email <span className="text-purple-500 cursor-pointer underline decoration-dotted underline-offset-4 decoration-1" onClick={() => navigator.clipboard.writeText("pamelajaneviloria@gmail.com")}>pamelajaneviloria@gmail.com</span></p>
            <div>
                <a href="">Github</a>
                <a href="">LinkedIn</a>
            </div>
        </section>
    );
};

export default Contact;