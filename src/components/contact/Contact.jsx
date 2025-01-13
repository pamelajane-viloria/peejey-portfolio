import { useState } from 'react';

function Contact() {

	return (
        <section className="xl:col-span-2 flex flex-col justify-center">
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me via email</p>
            <button onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>pamelajaneviloria@gmail.com</button>
            {/* Button for email */}
            {/* links like github linkedin */}
        </section>
    );
};

export default Contact;